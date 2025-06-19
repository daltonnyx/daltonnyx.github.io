# 1. Error Handling: Start with $ErrorActionPreference = "Stop"
$ErrorActionPreference = "Stop"

Write-Host "Starting AgentCrew installation script for Windows..."

# Initialize TempDir to null for cleanup check
$TempDir = $null

try {
    # 2. uv Prerequisite Check
    Write-Host "Checking for uv..."
    $uvPath = Get-Command uv -ErrorAction SilentlyContinue

    if ($null -eq $uvPath) {
        Write-Host "uv command not found. Attempting to install uv..."
        # 3. uv Installation (if needed)
        try {
            Invoke-Expression "& { $(Invoke-RestMethod https://astral.sh/uv/install.ps1) }"
            # Attempt to refresh environment variables for the current session
            # This is not always guaranteed to pick up PATH changes immediately from child processes
            $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        } catch {
            Write-Error "An error occurred during uv installation: $($_.Exception.Message)"
            # Specific check for ExecutionPolicy issue
            if ($_.Exception.Message -like "*execution of scripts is disabled on this system*") {
                Write-Warning "You might need to set the PowerShell execution policy. Try running:"
                Write-Warning "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser"
                Write-Warning "Then re-run this script."
            }
            exit 1
        }

        # Re-verify uv installation
        $uvPath = Get-Command uv -ErrorAction SilentlyContinue
        if ($null -eq $uvPath) {
            Write-Error "ERROR: uv installation failed or uv is not in PATH."
            Write-Host "Please install uv manually from https://astral.sh/uv and ensure it's in your PATH."
            Write-Host "You may need to restart your terminal or even log out and log back in for PATH changes to take effect."
            exit 1
        } else {
            Write-Host "uv installed successfully."
        }
    } else {
        Write-Host "uv is already installed at $($uvPath.Source)"
    }

    # 4. Temporary Directory Creation
    $TempDir = Join-Path $env:TEMP ([System.Guid]::NewGuid().ToString())
    New-Item -ItemType Directory -Path $TempDir -Force | Out-Null
    Write-Host "Created temporary directory at $TempDir"

    # 5. Clone Repository
    $RepoUrl = "https://github.com/saigontechnology/AgentCrew.git"
    $ClonePath = Join-Path $TempDir "AgentCrew"
    Write-Host "Cloning AgentCrew repository ($RepoUrl)..."
    try {
        git clone $RepoUrl $ClonePath
        Write-Host "Repository cloned successfully into $ClonePath"
    } catch {
        Write-Error "ERROR: Failed to clone repository. Ensure git is installed and in your PATH."
        Write-Error "Details: $($_.Exception.Message)"
        exit 1
    }

    # 6. Change Directory
    Set-Location -Path $ClonePath
    Write-Host "Changed directory to $(Get-Location)"

    # 7. Install Dependencies
    Write-Host "Installing project dependencies using 'uv tool install . --reinstall'..."
    Write-Host "Note: This script uses 'uv tool install . --reinstall' as requested."
    Write-Host "For some Python projects, 'uv pip install -e .' or 'uv pip install .' might be more common."
    Write-Host "Please verify this is the correct command for the AgentCrew project structure and that it makes the 'agentcrew' command available."
    try {
        uv tool install --python=3.12 . --reinstall
        Write-Host "Project dependencies installed successfully."
    } catch {
        Write-Error "ERROR: Failed to install project dependencies using uv."
        Write-Error "Details: $($_.Exception.Message)"
        exit 1
    }

    # 8. Success Message & Instructions
    Write-Host ""
    Write-Host "-------------------------------------------------------------------"
    Write-Host "AgentCrew installation successful!"
    Write-Host "The project has been cloned and set up in the temporary directory:"
    Write-Host "$ClonePath"
    Write-Host ""
    Write-Host "To start using AgentCrew:"
    Write-Host "1. Open a NEW PowerShell or Command Prompt terminal session."
    Write-Host "   (This ensures PATH changes for 'uv' and 'agentcrew' are applied)."
    Write-Host "2. To start the GUI, run: agentcrew chat"
    Write-Host "3. To start the console application, run: agentcrew chat --console"
    Write-Host ""
    Write-Host "IMPORTANT:"
    Write-Host "The AgentCrew project files are currently in a temporary directory: $ClonePath"
    Write-Host "If you want to keep the project source code, please move it to a permanent location."
    Write-Host "Example: Move-Item -Path '$ClonePath' -Destination 'C:\your\desired\permanent\location\AgentCrew'"
    Write-Host "The 'agentcrew' command should still work from any directory after installation if 'uv tool install' placed it in your PATH."
    Write-Host "-------------------------------------------------------------------"

}
catch {
    Write-Error "An unexpected error occurred: $($_.Exception.Message)"
    # Additional error details if available
    if ($_.Exception.StackTrace) {
        Write-Host "Stack Trace: $($_.Exception.StackTrace)"
    }
    if ($_.ScriptStackTrace) {
        Write-Host "Script Stack Trace: $($_.ScriptStackTrace)"
    }
    exit 1
}
finally {
    # Cleanup: Remove the temporary directory if it was created
    if ($null -ne $TempDir -and (Test-Path $TempDir)) {
        Write-Host "Cleaning up temporary directory: $TempDir"
        Remove-Item -Recurse -Force $TempDir -ErrorAction SilentlyContinue
    }
}

exit 0
