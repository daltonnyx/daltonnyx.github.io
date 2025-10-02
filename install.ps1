# Error Handling: Start with $ErrorActionPreference = "Stop"
$ErrorActionPreference = "Stop"

Write-Host "Starting AgentCrew installation script for Windows..."

try {
    # 1. uv Prerequisite Check
    Write-Host "Checking for uv..."
    $uvPath = Get-Command uv -ErrorAction SilentlyContinue

    if ($null -eq $uvPath) {
        Write-Host "uv command not found. Attempting to install uv..."
        # Install uv (if needed)
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

    # 2. Install AgentCrew directly from PyPI
    Write-Host "Installing AgentCrew from PyPI..."
    Write-Host "This will install the latest version of agentcrew-ai with CPU support."
    try {
        uv tool install --python=3.12 --force agentcrew-ai[cpu] --index https://download.pytorch.org/whl/cpu --index-strategy unsafe-best-match
        Write-Host "AgentCrew installed successfully."
    } catch {
        Write-Error "ERROR: Failed to install AgentCrew using uv."
        Write-Error "Details: $($_.Exception.Message)"
        exit 1
    }

    # 3. Success Message & Instructions
    Write-Host ""
    Write-Host "-------------------------------------------------------------------"
    Write-Host "AgentCrew installation successful!"
    Write-Host ""
    Write-Host "To start using AgentCrew:"
    Write-Host "1. Open a NEW PowerShell or Command Prompt terminal session."
    Write-Host "   (This ensures PATH changes for 'uv' and 'agentcrew' are applied)."
    Write-Host "2. To start the GUI, run: agentcrew chat"
    Write-Host "3. To start the console application, run: agentcrew chat --console"
    Write-Host "4. You can login with github copilot using: agentcrew copilot-auth"
    Write-Host ""
    Write-Host "For more information, visit: https://github.com/saigontechnology/AgentCrew"
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

exit 0
