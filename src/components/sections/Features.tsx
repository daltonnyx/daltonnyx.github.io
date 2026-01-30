import {
  Bot,
  Shield,
  Globe,
  MessageSquare,
  Users,
  FileText,
  CheckCircle,
  RefreshCcw,
  Sparkles,
  Zap,
  Brain,
  Network,
  Minimize2,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Multi-Model Flexibility",
      description:
        "Switch between Claude, GPT, Gemini, GitHub Copilot, Groq, DeepInfra, or custom providers without rewriting your setup. Choose the best model for each task or budget.",
      highlights: ["7+ AI Providers", "Hot-Swap Models", "Budget Control"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Agent Specialization",
      description:
        "Create focused agents for research, coding, writing, architecture, or any domain. Each agent gets custom instructions, tools, and behavioral rules that make them effective at their job.",
      highlights: [
        "Domain Experts",
        "Custom System Prompts",
        "Role-Based Tools",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Built-in Tool Suite",
      description:
        "Powerful built-in tools for browser automation, file editing, command execution, code analysis, web search, and memory systems. Extend further with Model Context Protocol (MCP) servers.",
      highlights: ["Browser Control", "File Editing", "Command Execution", "MCP Support"],
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Interactive & Automated Modes",
      description:
        "Use the GUI or console for interactive conversations. Run headless jobs for CI/CD pipelines, automation scripts, or batch processing with structured output validation.",
      highlights: ["GUI & Console", "Job Mode", "JSON Schema Output"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agent-to-Agent Communication",
      description:
        "Expose your agents as HTTP services using the A2A protocol. Let agents from different AgentCrew instances or external systems collaborate on complex workflows.",
      highlights: ["A2A Protocol", "HTTP API", "Distributed Teams"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Control and Safety",
      description:
        "Approve or deny tool usage before execution. Configure permissions, rate limits, and access controls. Review what your agents are doing before they do it.",
      highlights: ["Tool Approval", "Rate Limiting", "Audit Logging"],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Adaptive Behavior System",
      description:
        "Agents learn patterns using 'when...do...' rules. Behaviors persist across sessions and automatically apply to future interactions for smarter, personalized responses.",
      highlights: [
        "Pattern Learning",
        "Persistent Rules",
        "Auto-Application",
      ],
    },
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: "Conversation Management",
      description:
        "Rollback to any previous message and continue from there. Consolidate message history to reduce token usage while preserving context. Load and resume past conversations.",
      highlights: [
        "Time-Travel Chat",
        "History Consolidation",
        "Context Preservation",
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Agent Sharing & Reuse",
      description:
        "Export and import agent configurations to share with teams or reuse across projects. Contribute to community agent library or build your private collection.",
      highlights: [
        "TOML/JSON Export",
        "URL Import",
        "Community Library",
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligent Memory System",
      description:
        "Agents automatically retrieve relevant memories using semantic search when conversations start or topics change. Context-aware storage with date filtering enables personalized, informed responses.",
      highlights: [
        "Semantic Retrieval",
        "Context Awareness",
        "Date-Based Filtering",
      ],
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Smart Agent Transfer",
      description:
        "Automatically evaluates and transfers tasks to specialized agents based on domain expertise. Ensures optimal agent selection for research, coding, business analysis, and more.",
      highlights: [
        "Auto-Evaluation",
        "Domain Matching",
        "Seamless Handoffs",
      ],
    },
    {
      icon: <Minimize2 className="w-8 h-8" />,
      title: "Auto Context Management",
      description:
        "Proactively consolidates conversation history when approaching token limits. Maintains continuity by preserving recent context while intelligently summarizing earlier messages.",
      highlights: [
        "Auto-Consolidation",
        "Token Optimization",
        "Context Preservation",
      ],
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern AI Workflows
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold text-sm">
              Apache 2.0
            </span>
            <span className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">
              Status: Beta
            </span>
            <span className="inline-flex items-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold text-sm">
              Enterprise-Grade
            </span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AgentCrew provides enterprise-grade AI teamwork, personalization,
            and user control. Build specialized multi-agent teams, connect to
            any model, and orchestrate complex workflows securely.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 card-hover shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 text-primary-500 rounded-lg mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
