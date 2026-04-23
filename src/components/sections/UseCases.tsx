import {
  Search,
  FileText,
  Code,
  Palette,
  Presentation,
  Download,
  Bot,
  ArrowRight,
} from "lucide-react";

const agents = [
  {
    id: "AgentMaker",
    icon: <Bot className="w-6 h-6" />,
    title: "Agent Maker",
    description: "Crafts and refines system prompts for other agents.",
    tools: ["memory", "web_search"],
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
  {
    id: "DeepResearchAgent",
    icon: <Search className="w-6 h-6" />,
    title: "Deep Research",
    description: "Evidence-based research with web search and browsing.",
    tools: ["memory", "web_search", "browser"],
    color: "from-sky-500 to-cyan-500",
    bg: "bg-sky-50",
    text: "text-sky-600",
  },
  {
    id: "Document",
    icon: <FileText className="w-6 h-6" />,
    title: "Document Writer",
    description: "Sharp, analytical writing for docs and reports.",
    tools: ["memory", "web_search", "file_editing"],
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    id: "Engineer",
    icon: <Code className="w-6 h-6" />,
    title: "Software Engineer",
    description: "Codes, debugs, and analyzes repositories end-to-end.",
    tools: ["memory", "code_analysis", "file_editing", "commands"],
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
  {
    id: "HtmlAgent",
    icon: <Palette className="w-6 h-6" />,
    title: "HTML & 3D",
    description: "Builds interactive web apps and 3D scenes in one file.",
    tools: ["memory", "code_analysis", "file_editing", "browser"],
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    text: "text-indigo-600",
  },
  {
    id: "PresentationAgent",
    icon: <Presentation className="w-6 h-6" />,
    title: "Presenter",
    description: "Creates Slidev presentations for technical audiences.",
    tools: ["memory", "web_search", "file_editing", "commands"],
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
    text: "text-rose-600",
  },
];

const UseCases = () => {
  const downloadAgent = (agentId: string) => {
    const link = document.createElement("a");
    link.href = `/agents/${agentId}.toml`;
    link.download = `${agentId}.toml`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready-Made Agents
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Download, customize, or use these as blueprints for your own team.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm card-hover overflow-hidden"
            >
              {/* Top gradient strip */}
              <div
                className={`h-1.5 bg-gradient-to-r ${agent.color}`}
              />

              <div className="p-6">
                {/* Top row: icon + download */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-xl ${agent.bg} ${agent.text}`}
                  >
                    {agent.icon}
                  </div>
                  <button
                    onClick={() => downloadAgent(agent.id)}
                    className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Download .toml"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                  {agent.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {agent.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5">
                  {agent.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/saigontechnology/AgentCrew/tree/main/examples/agents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            Browse all example agents on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
