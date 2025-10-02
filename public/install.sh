#!/bin/bash
set -e

echo "Starting AgentCrew installation script..."

# 1. Check if uv command exists
echo "Checking for uv..."
if ! command -v uv &>/dev/null; then
  echo "uv command not found. Attempting to install uv..."
  # Install uv using curl
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

# 2. Install AgentCrew directly from PyPI
echo "Installing AgentCrew from PyPI..."
echo "This will install the latest version of agentcrew-ai with CPU support."

if uv tool install --python=3.12 --force agentcrew-ai[cpu] --index https://download.pytorch.org/whl/cpu --index-strategy unsafe-best-match; then
  echo "AgentCrew installed successfully."
else
  echo "ERROR: Failed to install AgentCrew using uv."
  exit 1
fi

# 3. Print a final success message
echo ""
echo "-------------------------------------------------------------------"
echo "AgentCrew installation successful!"
echo ""
echo "To start using AgentCrew:"
echo "1. Open a NEW terminal session to ensure PATH changes are applied."
echo "2. To start the GUI, run: agentcrew chat"
echo "3. To start the console application, run: agentcrew chat --console"
echo "4. You can login with github copilot using: agentcrew copilot-auth"
echo ""
echo "For more information, visit: https://github.com/saigontechnology/AgentCrew"
echo "-------------------------------------------------------------------"

exit 0
