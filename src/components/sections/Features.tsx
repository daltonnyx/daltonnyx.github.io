import {
  Cpu,
  Users,
  Wrench,
  MonitorSmartphone,
  BrainCircuit,
  Sparkles,
  GitBranch,
  ShieldCheck,
  FileJson,
  Share2,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  category: string;
  categoryColor: string;
  span?: "single" | "double";
}

const features: Feature[] = [
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Multi-Model Support",
    description:
      "Connect Claude, GPT, Gemini, GitHub Copilot, OpenAI Codex, DeepInfra, Together AI, OpenCode, or any OpenAI-compatible endpoint.",
    tags: ["Claude", "GPT", "Gemini", "Custom"],
    category: "Providers",
    categoryColor: "bg-blue-100 text-blue-700",
    span: "double",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Agent Teams",
    description:
      "Build specialized agents with unique tools and prompts. Transfer conversations or delegate tasks in parallel.",
    tags: ["Transfer", "Delegate", "Specialized"],
    category: "Agents",
    categoryColor: "bg-purple-100 text-purple-700",
    span: "double",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Built-in Tools",
    description:
      "Browser automation, file editing, code analysis, shell commands, web search, clipboard, voice, and MCP servers.",
    tags: ["Browser", "Files", "Code", "MCP"],
    category: "Tools",
    categoryColor: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7" />,
    title: "GUI, Console & API",
    description:
      "Desktop app, terminal chat, headless job runner, and A2A HTTP server — all from one install.",
    tags: ["GUI", "CLI", "Job Mode", "A2A"],
    category: "Interfaces",
    categoryColor: "bg-orange-100 text-orange-700",
  },
  {
    icon: <BrainCircuit className="w-7 h-7" />,
    title: "Semantic Memory",
    description:
      "ChromaDB-powered memory retrieves relevant context, supports topic-based forget, and learns behaviors over time.",
    tags: ["Retrieval", "Behaviors", "Context"],
    category: "Memory",
    categoryColor: "bg-rose-100 text-rose-700",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Prompt Evolution",
    description:
      "Run /evolve to analyze an agent's memory and auto-propose system prompt improvements you can approve or edit.",
    tags: ["/evolve", "Auto-Proposal", "Review"],
    category: "Advanced",
    categoryColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: <GitBranch className="w-7 h-7" />,
    title: "Conversation Control",
    description:
      "Rollback to any message, fork threads, consolidate history to save tokens, and resume past sessions.",
    tags: ["Rollback", "Fork", "Consolidate"],
    category: "Chat",
    categoryColor: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Safety by Default",
    description:
      "Every tool call requires approval. Rate-limited commands, path validation, and full audit logging keep you in control.",
    tags: ["Approval", "Rate Limits", "Audit"],
    category: "Safety",
    categoryColor: "bg-red-100 text-red-700",
  },
  {
    icon: <FileJson className="w-7 h-7" />,
    title: "Structured Output",
    description:
      "Enforce JSON schema responses in job mode. Perfect for CI/CD pipelines and automated workflows.",
    tags: ["JSON Schema", "Validation", "CI/CD"],
    category: "Automation",
    categoryColor: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: <Share2 className="w-7 h-7" />,
    title: "Share Agents",
    description:
      "Export and import agent configurations as TOML or JSON. Share with your team or reuse across projects.",
    tags: ["TOML", "JSON", "Import/Export"],
    category: "Collaboration",
    categoryColor: "bg-teal-100 text-teal-700",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build AI Teams
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AgentCrew ships with providers, tools, interfaces, memory, and safety
            controls — all open source and ready to use.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                card-hover flex flex-col
                ${feature.span === "double" ? "lg:col-span-2" : ""}
              `}
            >
              {/* Top row: icon + category */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-primary-50 text-primary-600 rounded-xl">
                  {feature.icon}
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${feature.categoryColor}`}
                >
                  {feature.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
