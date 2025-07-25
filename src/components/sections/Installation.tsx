import { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  Download,
  Settings,
  Play,
  ChevronRight,
} from "lucide-react";
import { cn } from "../../lib/utils";

const Installation = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"pypi" | "script" | "source">(
    "pypi",
  );

  const copyToClipboard = (text: string, commandId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(commandId);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const pypiInstallCommand = "uv tool install agentcrew-ai@latest";

  const scriptInstallCommands = {
    linux: "curl -LsSf https://agentcrew.dev/install.sh | bash",
    windows:
      'powershell -ExecutionPolicy ByPass -c "irm https://agentcrew.dev/install.ps1 | iex"',
  };

  const sourceCommands = [
    "git clone https://github.com/saigontechnology/AgentCrew.git",
    "cd AgentCrew",
    "uv sync",
    "uv run AgentCrew/main.py chat",
    "uv tool install .",
  ];

  const usageCommands = [
    "agentcrew chat",
    "agentcrew chat --console",
    "agentcrew chat --provider openai --console",
  ];

  const prerequisites = [
    { name: "Python 3.12+", description: "Modern Python version required" },
    {
      name: "uv package manager",
      description: "Fast Python package manager (pip install uv)",
    },
    { name: "API Keys", description: "At least one AI provider API key" },
  ];

  return (
    <section id="installation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            Install AgentCrew from PyPI for the fastest setup experience. GUI
            and console interfaces are both supported.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Choose your preferred installation method below. The PyPI package is
            the recommended approach for most users.
          </p>
        </div>

        {/* Prerequisites */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Prerequisites
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {prerequisites.map((prereq, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 text-center"
              >
                <div className="font-semibold text-gray-900 mb-1">
                  {prereq.name}
                </div>
                <div className="text-sm text-gray-600">
                  {prereq.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("pypi")}
              className={cn(
                "flex-1 px-4 py-4 text-center font-semibold transition-colors duration-200",
                activeTab === "pypi"
                  ? "bg-primary-50 text-primary-500 border-b-2 border-primary-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
              )}
            >
              <Download className="w-5 h-5 inline-block mr-2" />
              PyPI Package
            </button>
            <button
              onClick={() => setActiveTab("script")}
              className={cn(
                "flex-1 px-4 py-4 text-center font-semibold transition-colors duration-200",
                activeTab === "script"
                  ? "bg-primary-50 text-primary-500 border-b-2 border-primary-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
              )}
            >
              <Terminal className="w-5 h-5 inline-block mr-2" />
              Install Script
            </button>
            <button
              onClick={() => setActiveTab("source")}
              className={cn(
                "flex-1 px-4 py-4 text-center font-semibold transition-colors duration-200",
                activeTab === "source"
                  ? "bg-primary-50 text-primary-500 border-b-2 border-primary-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
              )}
            >
              <Settings className="w-5 h-5 inline-block mr-2" />
              From Source
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "pypi" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Recommended: PyPI Package
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Install the latest version from Python Package Index
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                    ⚡ Fastest & Most Up-to-date
                  </div>
                </div>

                {/* PyPI Install Command */}
                <div className="max-w-3xl mx-auto">
                  <div className="bg-gray-900 rounded-lg p-6 relative">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                      <h4 className="text-lg font-semibold text-white">
                        All Platforms (Recommended)
                      </h4>
                    </div>
                    <code className="text-primary-400 text-lg font-mono break-all block">
                      {pypiInstallCommand}
                    </code>
                    <button
                      onClick={() =>
                        copyToClipboard(pypiInstallCommand, "pypi")
                      }
                      className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                    >
                      {copiedCommand === "pypi" ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>

                  {/* Benefits */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-primary-50 p-4 rounded-lg text-center">
                      <div className="text-primary-600 font-semibold mb-1">
                        ✨ Latest Version
                      </div>
                      <div className="text-sm text-primary-700">
                        Always up-to-date
                      </div>
                    </div>
                    <div className="bg-primary-50 p-4 rounded-lg text-center">
                      <div className="text-primary-600 font-semibold mb-1">
                        ⚡ Quick Setup
                      </div>
                      <div className="text-sm text-primary-700">
                        One command install
                      </div>
                    </div>
                    <div className="bg-primary-50 p-4 rounded-lg text-center">
                      <div className="text-primary-600 font-semibold mb-1">
                        🔧 Auto Dependencies
                      </div>
                      <div className="text-sm text-primary-700">
                        Handles requirements
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "script" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Installation Scripts
                  </h3>
                  <p className="text-gray-600">
                    Platform-specific automated installation scripts
                  </p>
                </div>

                {/* Linux/MacOS */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    Linux and MacOS
                  </h4>
                  <div className="bg-gray-900 rounded-lg p-4 relative">
                    <code className="text-green-400 text-sm font-mono break-all">
                      {scriptInstallCommands.linux}
                    </code>
                    <button
                      onClick={() =>
                        copyToClipboard(scriptInstallCommands.linux, "linux")
                      }
                      className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                    >
                      {copiedCommand === "linux" ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Windows */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    Windows
                  </h4>
                  <div className="bg-gray-900 rounded-lg p-4 relative">
                    <code className="text-blue-400 text-sm font-mono break-all">
                      {scriptInstallCommands.windows}
                    </code>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          scriptInstallCommands.windows,
                          "windows",
                        )
                      }
                      className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                    >
                      {copiedCommand === "windows" ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "source" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Install from Source
                  </h3>
                  <p className="text-gray-600">
                    Development installation for contributors and advanced users
                  </p>
                </div>

                <div className="space-y-6">
                  {sourceCommands.map((command, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1 bg-gray-900 rounded-lg p-4 relative">
                        <code className="text-green-400 text-sm font-mono">
                          {command}
                        </code>
                        <button
                          onClick={() =>
                            copyToClipboard(command, `source-${index}`)
                          }
                          className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                        >
                          {copiedCommand === `source-${index}` ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-6 text-white">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <Play className="w-6 h-6 mr-2" />
              Basic Usage
            </h3>
            <p className="text-primary-100">
              Common commands to get you started
            </p>
          </div>

          <div className="p-8 space-y-6">
            {usageCommands.map((command, index) => (
              <div key={index} className="flex items-center space-x-4">
                <ChevronRight className="w-5 h-5 text-primary-600" />
                <div className="flex-1 bg-gray-100 rounded-lg p-4 relative">
                  <code className="text-gray-800 font-mono">{command}</code>
                  <button
                    onClick={() => copyToClipboard(command, `usage-${index}`)}
                    className="absolute top-4 right-4 p-2 bg-white hover:bg-gray-50 rounded-lg transition-colors duration-200 shadow-sm"
                  >
                    {copiedCommand === `usage-${index}` ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            What's Next?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <Settings className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Configure API Keys
              </h4>
              <p className="text-gray-600 text-sm">
                Set up your AI provider credentials through the GUI or
                environment variables
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <Terminal className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Create Your First Agent
              </h4>
              <p className="text-gray-600 text-sm">
                Define specialized agents with custom prompts and tools using
                the configuration interface
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <Play className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Start Building
              </h4>
              <p className="text-gray-600 text-sm">
                Begin creating AI workflows and experience the power of
                collaborative agents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
