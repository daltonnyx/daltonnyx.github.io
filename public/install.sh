#!/bin/bash
set -e

echo "Starting AgentCrew installation script..."

# 1. Check if uv command exists
echo "Checking for uv..."
if ! command -v uv &>/dev/null; then
  echo "uv command not found. Attempting to install uv..."
  # 2. If not, install uv using curl
  curl -LsSf https://astral.sh/uv/install.sh | sh

  # Source environment variables to make uv available in the current session
  # This is common for installers that modify PATH in .bashrc or .profile
  # Try common profile files. This might not be universally effective immediately
  # without restarting the shell or sourcing the correct profile file manually.
  if [ -f "$HOME/.profile" ]; then
    # shellcheck source=/dev/null
    source "$HOME/.profile"
  elif [ -f "$HOME/.bash_profile" ]; then
    # shellcheck source=/dev/null
    source "$HOME/.bash_profile"
  elif [ -f "$HOME/.bashrc" ]; then
    # shellcheck source=/dev/null
    source "$HOME/.bashrc"
  elif [ -f "$HOME/.zshrc" ]; then
    # shellcheck source=/dev/null
    source "$HOME/.zshrc"
  fi

  # Verify uv installation post-attempt
  if ! command -v uv &>/dev/null; then
    echo "ERROR: uv installation failed or uv is not in PATH."
    echo "Please install uv manually from https://astral.sh/uv and ensure it's in your PATH."
    exit 1
  else
    echo "uv installed successfully."
  fi
else
  echo "uv is already installed."
fi

# 3. Create a temporary directory
TEMP_DIR=$(mktemp -d)
echo "Created temporary directory at $TEMP_DIR"

# Trap to clean up temp directory on exit
# shellcheck disable=SC2064
trap "rm -rf '$TEMP_DIR'" EXIT

# 4. Clone the repository into the temporary directory
echo "Cloning AgentCrew repository (https://github.com/saigontechnology/AgentCrew.git)..."
if git clone https://github.com/saigontechnology/AgentCrew.git "$TEMP_DIR/AgentCrew"; then
  echo "Repository cloned successfully into $TEMP_DIR/AgentCrew"
else
  echo "ERROR: Failed to clone repository."
  exit 1
fi

# 5. Change the current directory to the cloned repository's root
cd "$TEMP_DIR/AgentCrew"
echo "Changed directory to $PWD"
last_version=$(git tag -l | tail -1)
git checkout $last_version

# 6. Install project dependencies
echo "Installing project dependencies using 'uv tool install . --reinstall'..."
echo "Note: This script uses 'uv tool install . --reinstall' as requested."
echo "For some Python projects, 'uv pip install -e .' or 'uv pip install .' might be more common for installing dependencies and the project itself in editable mode."
echo "Please verify this is the correct command for the AgentCrew project structure."

if uv tool install --python=3.12 . --reinstall; then
  echo "Project dependencies installed successfully."
else
  echo "ERROR: Failed to install project dependencies using uv."
  exit 1
fi

# 7. Print a final success message
echo ""
echo "-------------------------------------------------------------------"
echo "AgentCrew installation successful!"
echo "The project has been cloned and set up in the temporary directory:"
echo "$TEMP_DIR/AgentCrew"
echo ""
echo "IMPORTANT:"
echo "This is a temporary directory. If you want to keep the project,"
echo "please move it to a permanent location before this shell session ends or the system reboots."
echo "Example: mv '$TEMP_DIR/AgentCrew' /path/to/your/desired/location/"
echo "Alternatively, you can re-run this script to set it up again in a new temporary directory."
echo "-------------------------------------------------------------------"

# The cleanup of TEMP_DIR will happen automatically on script exit due to the trap command.
# If you want the user to manually clean it, you can remove the trap and instruct them.
# For now, automatic cleanup is safer.

exit 0
