import { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  Download,
  Settings,
  Play,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import { cn } from "../../lib/utils";

const Installation = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"quick" | "standard">("quick");

  const copyToClipboard = (text: string, commandId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(commandId);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const quickInstallCommands = {
    linux:
      "curl -LsSf https://gist.githubusercontent.com/daltonnyx/aa45d64fd8fb6a084067d4012a5710a6/raw/116f24fe3d94f0c1a972da92cac2f278a59fdad6/install.sh | bash",
    windows:
      'powershell -ExecutionPolicy ByPass -c "irm https://gist.githubusercontent.com/daltonnyx/e2d9a4d371e095bfa07cf5246d7e0746/raw/af138f99ed5351dc59cae81143e058ef95b5fa37/install.ps1 | iex"',
  };

  const standardCommands = [
    "git clone https://github.com/saigontechnology/AgentCrew.git",
    "cd AgentCrew",
    "uv sync",
    "uv run AgentCrew/main.py chat",
    "uv tool install .",
  ];

  const usageCommands = [
    "agentcrew copilot-auth",
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
    { name: "Git", description: "Version control system" },
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
            The fastest way to try AgentCrew is with the graphical interface
            (GUI). Console/CLI is also supported for advanced users.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Follow the quick start or step-by-step options below. See the
            documentation for full details on configuration and usage.
          </p>
        </div>

        {/* Prerequisites */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Prerequisites
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              onClick={() => setActiveTab("quick")}
              className={cn(
                "flex-1 px-6 py-4 text-center font-semibold transition-colors duration-200",
                activeTab === "quick"
                  ? "bg-primary-50 text-primary-500 border-b-2 border-primary-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
              )}
            >
              <Download className="w-5 h-5 inline-block mr-2" />
              Quick Install
            </button>
            <button
              onClick={() => setActiveTab("standard")}
              className={cn(
                "flex-1 px-6 py-4 text-center font-semibold transition-colors duration-200",
                activeTab === "standard"
                  ? "bg-primary-50 text-primary-500 border-b-2 border-primary-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
              )}
            >
              <Terminal className="w-5 h-5 inline-block mr-2" />
              Standard Install
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "quick" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    One-Command Installation
                  </h3>
                  <p className="text-gray-600">
                    Choose your operating system and run the command
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
                      {quickInstallCommands.linux}
                    </code>
                    <button
                      onClick={() =>
                        copyToClipboard(quickInstallCommands.linux, "linux")
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
                      {quickInstallCommands.windows}
                    </code>
                    <button
                      onClick={() =>
                        copyToClipboard(quickInstallCommands.windows, "windows")
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
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-yellow-800">
                      <strong>Note:</strong> The Windows script is AI-generated
                      and may need testing. Please provide feedback if you
                      encounter issues.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "standard" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Step-by-Step Installation
                  </h3>
                  <p className="text-gray-600">
                    Manual installation for all platforms
                  </p>
                </div>

                <div className="space-y-6">
                  {standardCommands.map((command, index) => (
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
                            copyToClipboard(command, `standard-${index}`)
                          }
                          className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                        >
                          {copiedCommand === `standard-${index}` ? (
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

