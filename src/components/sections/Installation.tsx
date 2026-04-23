import { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  Download,
  Play,
  Rocket,
  Bot,
  Sparkles,
} from "lucide-react";
import { cn } from "../../lib/utils";

const Installation = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [installTab, setInstallTab] = useState<"script" | "pip" | "docker">(
    "script",
  );
  const [keyTab, setKeyTab] = useState<"env" | "config" | "subscription">(
    "env",
  );

  const copyToClipboard = (text: string, commandId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(commandId);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const scriptCommands = {
    linux: "curl -LsSf https://agentcrew.dev/install.sh | bash",
    windows:
      'powershell -ExecutionPolicy ByPass -c "irm https://agentcrew.dev/install.ps1 | iex"',
  };

  const pipCommand = "pip install agentcrew-ai";

  const dockerCommand = "docker pull daltonnyx/agentcrew:latest";

  const keyCommands = {
    env: [
      {
        label: "Anthropic Claude",
        cmd: 'export ANTHROPIC_API_KEY="sk-ant-..."',
      },
      { label: "OpenAI", cmd: 'export OPENAI_API_KEY="sk-proj-..."' },
      { label: "Google Gemini", cmd: 'export GEMINI_API_KEY="AIza..."' },
    ],
    config: `mkdir -p ~/.AgentCrew\ncat > ~/.AgentCrew/config.json << 'EOF'\n{\n  "api_keys": {\n    "ANTHROPIC_API_KEY": "sk-ant-..."\n  }\n}\nEOF`,
    subscription: [
      {
        label: "ChatGPT Plus / Pro (Codex)",
        cmd: "agentcrew chatgpt-auth\nagentcrew chat --provider openai_codex",
      },
      {
        label: "GitHub Copilot",
        cmd: "agentcrew copilot-auth\nagentcrew chat --provider github_copilot",
      },
    ],
  };

  const launchCommands = [
    { label: "Desktop GUI", cmd: "agentcrew chat" },
    { label: "Terminal mode", cmd: "agentcrew chat --console" },
  ];

  const createAgentToml = `[[agents]]
name = "CodeAssistant"
description = "Helps write and review code"
tools = ["code_analysis", "file_editing", "web_search", "memory"]
system_prompt = """You are an expert software engineer.
Focus on code quality, security, and maintainability.
Today is {current_date}."""`;

  const renderCodeBlock = (
    code: string,
    id: string,
    language?: string,
    multiline = false,
  ) => (
    <div className="bg-gray-900 rounded-lg p-4 relative group">
      {language && (
        <div className="absolute top-3 left-4 text-xs text-gray-500 font-mono uppercase">
          {language}
        </div>
      )}
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-3 right-3 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 opacity-0 group-hover:opacity-100"
      >
        {copiedCommand === id ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400" />
        )}
      </button>
      <pre
        className={cn(
          "font-mono text-sm break-all whitespace-pre-wrap",
          language ? "mt-5" : "",
        )}
      >
        <code className={multiline ? "text-green-400" : "text-primary-400"}>
          {code}
        </code>
      </pre>
    </div>
  );

  const StepNumber = ({ num }: { num: number }) => (
    <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
      {num}
    </div>
  );

  return (
    <section id="installation" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four steps from install to your first AI agent team.
          </p>
        </div>

        {/* Step 1: Install */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <StepNumber num={1} />
            <h3 className="text-2xl font-bold text-gray-900">Install</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden ml-14">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {(
                [
                  ["script", "Install Script", Terminal],
                  ["pip", "pip", Download],
                  ["docker", "Docker", Bot],
                ] as const
              ).map(([key, label, Icon]) => (
                <button
                  key={key}
                  onClick={() => setInstallTab(key)}
                  className={cn(
                    "flex-1 px-4 py-4 text-center font-semibold transition-colors duration-200 flex items-center justify-center gap-2",
                    installTab === key
                      ? "bg-primary-50 text-primary-600 border-b-2 border-primary-500"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            <div className="p-8">
              {installTab === "script" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      macOS / Linux
                    </h4>
                    {renderCodeBlock(scriptCommands.linux, "script-linux")}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full" />
                      Windows
                    </h4>
                    {renderCodeBlock(scriptCommands.windows, "script-windows")}
                  </div>
                </div>
              )}

              {installTab === "pip" && (
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Requires Python 3.12+. Works on any platform.
                  </p>
                  {renderCodeBlock(pipCommand, "pip-install")}
                </div>
              )}

              {installTab === "docker" && (
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Run AgentCrew in a container with no local setup.
                  </p>
                  {renderCodeBlock(dockerCommand, "docker-pull")}
                  <p className="text-sm text-gray-500">
                    Then run:{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded text-gray-700">
                      docker run -it --rm daltonnyx/agentcrew chat
                    </code>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Step 2: Add API Key */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <StepNumber num={2} />
            <h3 className="text-2xl font-bold text-gray-900">Add an API Key</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden ml-14">
            <div className="flex border-b border-gray-200">
              {(
                [
                  ["env", "Environment Variable", Terminal],
                  ["config", "Config File", Download],
                  ["subscription", "Subscription Login", Sparkles],
                ] as const
              ).map(([key, label, Icon]) => (
                <button
                  key={key}
                  onClick={() => setKeyTab(key)}
                  className={cn(
                    "flex-1 px-4 py-4 text-center font-semibold transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base",
                    keyTab === key
                      ? "bg-primary-50 text-primary-600 border-b-2 border-primary-500"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            <div className="p-8">
              {keyTab === "env" && (
                <div className="space-y-4">
                  <p className="text-gray-600">
                    The quickest way. Pick your provider and run the export
                    command.
                  </p>
                  {keyCommands.env.map((item) => (
                    <div key={item.label}>
                      <div className="text-sm font-medium text-gray-700 mb-2">
                        {item.label}
                      </div>
                      {renderCodeBlock(item.cmd, `key-env-${item.label}`)}
                    </div>
                  ))}
                </div>
              )}

              {keyTab === "config" && (
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Persistent setup. Keys are stored in{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      ~/.AgentCrew/config.json
                    </code>
                    .
                  </p>
                  {renderCodeBlock(
                    keyCommands.config,
                    "key-config",
                    "bash",
                    true,
                  )}
                </div>
              )}

              {keyTab === "subscription" && (
                <div className="space-y-4">
                  <p className="text-gray-600">
                    No API key needed. Log in with your existing subscription.
                  </p>
                  {keyCommands.subscription.map((item) => (
                    <div key={item.label}>
                      <div className="text-sm font-medium text-gray-700 mb-2">
                        {item.label}
                      </div>
                      {renderCodeBlock(
                        item.cmd,
                        `key-sub-${item.label}`,
                        "bash",
                        true,
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Step 3: Launch */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <StepNumber num={3} />
            <h3 className="text-2xl font-bold text-gray-900">Launch</h3>
          </div>

          <div className="ml-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {launchCommands.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{item.label}</h4>
                  <button
                    onClick={() =>
                      copyToClipboard(item.cmd, `launch-${item.label}`)
                    }
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {copiedCommand === `launch-${item.label}` ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
                <code className="block bg-gray-900 text-primary-400 rounded-lg p-3 font-mono text-sm">
                  {item.cmd}
                </code>
              </div>
            ))}
          </div>
        </div>

        {/* Step 4: Create Your First Agent */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <StepNumber num={4} />
            <h3 className="text-2xl font-bold text-gray-900">
              Create Your First Agent
            </h3>
          </div>

          <div className="ml-14 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 space-y-6">
              <p className="text-gray-600">
                Use the interactive wizard, or write an agent definition
                directly.
              </p>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary-500" />
                  Interactive Wizard
                </h4>
                {renderCodeBlock("agentcrew create-agent", "create-agent-cmd")}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary-500" />
                  Manual Configuration
                </h4>
                <p className="text-sm text-gray-500 mb-3">
                  Save to{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    ~/.AgentCrew/agents.toml
                  </code>
                </p>
                {renderCodeBlock(createAgentToml, "agent-toml", "toml", true)}
              </div>

              <div className="bg-primary-50 rounded-lg p-4 flex items-start gap-3">
                <Rocket className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-primary-800">
                    <strong>Tip:</strong> On first launch, AgentCrew will guide
                    you through creating your first agent automatically if you
                    don't have one yet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Working Example */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-6 text-white">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Play className="w-6 h-6" />
              Start Working
            </h3>
            <p className="text-primary-100 mt-1">
              Switch between agents, attach files, and let your team handle the
              rest.
            </p>
          </div>
          <div className="p-8">
            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
              <div className="text-purple-400 mb-2">/agent Architect</div>
              <div className="text-gray-300 mb-4">
                Design a clean API for a task manager.
              </div>
              <div className="text-purple-400 mb-2">@Coding</div>
              <div className="text-gray-300 mb-4">
                Implement the task manager in Python using FastAPI.
              </div>
              <div className="text-purple-400 mb-2">@Reviewer</div>
              <div className="text-gray-300">
                Review the code for security issues.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
