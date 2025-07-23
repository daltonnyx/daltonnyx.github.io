import {
  Rss,
  Search,
  FileText,
  Code,
  Palette,
  Presentation,
  ArrowRight,
  CheckCircle,
  Download,
  ExternalLink,
  Wrench,
} from "lucide-react";

const UseCases = () => {
  const agents = [
    {
      id: "DailySummarizer",
      icon: <Rss className="w-8 h-8" />,
      title: "Daily News Summarizer",
      description:
        "Automatically fetch and summarize daily news from RSS feeds related to AI, LLMs, and Software Development.",
      tools: ["memory", "web_search"],
      mcpTools: [
        {
          name: "rss2md",
          url: "https://github.com/daltonnyx/userful-mcps/",
          description: "RSS to Markdown converter for news aggregation"
        }
      ],
      useCases: [
        "Daily AI/ML news briefings",
        "Software development trend monitoring", 
        "Automated tech newsletter generation",
        "Research paper and blog post aggregation",
      ],
      color: "from-orange-500 to-red-500",
      audience: "Tech Leaders & Researchers",
      enabled: true,
    },
    {
      id: "DeepResearchAgent", 
      icon: <Search className="w-8 h-8" />,
      title: "Deep Research Agent",
      description:
        "Systematic, thorough, and evidence-based research with comprehensive analysis and reporting capabilities.",
      tools: ["memory", "web_search"],
      mcpTools: [],
      useCases: [
        "Market research and competitive analysis",
        "Literature reviews and academic research",
        "Technology evaluation and comparison",
        "Strategic planning and trend analysis",
      ],
      color: "from-blue-500 to-cyan-500",
      audience: "Analysts & Strategists",
      enabled: true,
    },
    {
      id: "Document",
      icon: <FileText className="w-8 h-8" />,
      title: "Document Writer",
      description:
        "Specialized in creating high-quality documents with sharp, analytical writing style and intellectual depth.",
      tools: ["memory", "web_search"],
      mcpTools: [
        {
          name: "Office Word MCP Server",
          url: "https://github.com/GongRzhe/Office-Word-MCP-Server",
          description: "Microsoft Word document creation and editing"
        }
      ],
      useCases: [
        "Technical documentation creation",
        "Business reports and proposals",
        "Academic papers and research documents",
        "Policy documents and procedures",
      ],
      color: "from-green-500 to-emerald-500",
      audience: "Writers & Content Creators",
      enabled: true,
    },
    {
      id: "Engineer",
      icon: <Code className="w-8 h-8" />,
      title: "Software Engineer",
      description:
        "Expert in code implementation, debugging, programming assistance with comprehensive repository analysis and documentation research.",
      tools: ["memory", "code_analysis", "web_search"],
      mcpTools: [
        {
          name: "wcgw",
          url: "https://github.com/rusiaaman/wcgw",
          description: "Code editing and terminal operations"
        },
        {
          name: "context7", 
          url: "https://github.com/upstash/context7",
          description: "Documentation context and retrieval"
        }
      ],
      useCases: [
        "Full-stack application development",
        "Code review and debugging assistance",
        "API integration and testing",
        "Technical architecture planning",
      ],
      color: "from-purple-500 to-pink-500",
      audience: "Developers & Engineering Teams",
      enabled: true,
    },
    {
      id: "HtmlAgent",
      icon: <Palette className="w-8 h-8" />,
      title: "HTML & 3D Agent",
      description:
        "Specialized in building single-file HTML applications with Three.js for 3D graphics, games, and interactive experiences.",
      tools: ["memory", "code_analysis", "web_search"],
      mcpTools: [
        {
          name: "wcgw",
          url: "https://github.com/rusiaaman/wcgw", 
          description: "Code editing and terminal operations"
        },
        {
          name: "playwright-mcp",
          url: "https://github.com/microsoft/playwright-mcp",
          description: "Browser automation and testing"
        }
      ],
      useCases: [
        "Interactive 3D web applications",
        "Educational 3D visualizations",
        "Browser-based games and simulations", 
        "Rapid prototyping of web interfaces",
      ],
      color: "from-indigo-500 to-purple-500",
      audience: "Frontend Developers & Designers",
      enabled: true,
    },
    {
      id: "PresentationAgent",
      icon: <Presentation className="w-8 h-8" />,
      title: "Technical Presenter",
      description:
        "Creates engaging, technically accurate presentations using Slidev framework for developer and technical audiences.",
      tools: ["memory", "web_search"],
      mcpTools: [
        {
          name: "filesystem",
          url: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem",
          description: "File system operations for presentation editing"
        }
      ],
      useCases: [
        "Technical conference presentations",
        "Developer training materials",
        "Product demo presentations",
        "Educational workshop content",
      ],
      color: "from-red-500 to-pink-500",
      audience: "Speakers & Educators",
      enabled: true,
    },
  ];

  const downloadAgent = (agentId: string) => {
    const link = document.createElement("a");
    link.href = `/agents/${agentId}.toml`;
    link.download = `${agentId}.toml`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const enabledAgents = agents.filter(agent => agent.enabled);

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Example AI Agents to Inspire Your Workflows
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            Explore these sample agents to understand how AgentCrew works. Use them as-is or as blueprints 
            to create custom agents tailored to your specific needs and workflows.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Download any configuration, modify it, or build entirely new agents based on these examples.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {enabledAgents.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg card-hover overflow-hidden"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${agent.color} p-6 text-white`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {agent.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{agent.title}</h3>
                      <p className="text-white/80 text-sm">{agent.audience}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => downloadAgent(agent.id)}
                    className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 transition-colors px-3 py-2 rounded-lg text-sm font-medium"
                    title="Download agent configuration"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {agent.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Perfect For:
                  </h4>
                  <ul className="space-y-2">
                    {agent.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Built-in Tools */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <Wrench className="w-4 h-4" />
                    <span>Built-in Tools</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended MCP Tools */}
                {agent.mcpTools.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Recommended MCP Tools:
                    </h4>
                    <div className="space-y-3">
                      {agent.mcpTools.map((mcp, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm text-gray-900">
                              {mcp.name}
                            </span>
                            <a
                              href={mcp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-xs"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>View</span>
                            </a>
                          </div>
                          <p className="text-xs text-gray-600">{mcp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Disabled Agents Notice */}
        {agents.some(agent => !agent.enabled) && (
          <div className="bg-gray-50 rounded-lg p-6 mb-16">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-600 mb-4">
              Additional agents are in development and will be available soon:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agents.filter(agent => !agent.enabled).map((agent, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-gray-500">
                  {agent.icon}
                  <span className="font-medium">{agent.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Build Your Custom AI Agents?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Use these example agents as starting points to create your own specialized AI assistants. 
            Customize their prompts, tools, and capabilities to match your unique workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#installation"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="https://github.com/saigontechnology/AgentCrew"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20"
            >
              View on GitHub
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;