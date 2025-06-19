import { 
  Bot, 
  Shield, 
  Globe, 
  MessageSquare, 
  Settings,
  Users,
  Code,
  Search,
  Brain,
  FileText,
  CheckCircle,
  RefreshCcw,
  Sparkles,
  Zap
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Wide AI Model Support",
      description: "Works with OpenAI GPT, Anthropic Claude, Google Gemini, GitHub Copilot, Groq, DeepInfra, and custom providers. Switch models anytime.",
      highlights: ["6+ AI Providers", "GitHub Copilot", "Customizable"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Agent Teams",
      description: "Define multiple AI agents, each with specialized expertise. Agents can intelligently transfer tasks for maximum efficiency.",
      highlights: ["Multi-Agent System", "Smart Task Sharing", "Custom Prompts"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Adaptive Behaviors",
      description: "Personalize agents using powerful 'when...do...' rules. Agents learn, adapt, and apply rules for smarter interactions over time.",
      highlights: ["Behavioral Rules", "Personalization", "Continuous Improvement"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Streaming Responses",
      description: "Get real-time, live responses from AI agents so you see answers as they are generated.",
      highlights: ["Real-Time Output", "Faster Feedback", "Enhanced UX"]
    },
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: "Rollback & Consolidate",
      description: "Easily revert to previous chat states or merge multiple messages for streamlined conversations.",
      highlights: ["Rollback Messages", "Consolidate Chats", "Flexible History"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "User Control & Tool Call Approval",
      description: "You approve every tool invocation. Agents must request permission, ensuring control and security at every step.",
      highlights: ["Full User Control", "Manual Permission", "Audit Trail"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Model Context Protocol (MCP)",
      description: "Standardized agent-to-tool and agent-to-agent integration. Seamlessly connect to Jira, APIs, databases, and more.",
      highlights: ["Standardized MCP", "External Integrations", "Extensible"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Web Search & Research",
      description: "Agents can access the latest information online with your approval, providing up-to-date answers and insights.",
      highlights: ["Live Web Data", "Web Research", "Current Info"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Conversation Memory",
      description: "Agents remember context and prior conversations, enabling more relevant, personalized AI workflows.",
      highlights: ["Context Awareness", "Persistent Memory", "Personalized Replies"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Assistance",
      description: "Specialized agents help you analyze, debug, and review code with advanced programming support.",
      highlights: ["Code Analysis", "Debugging", "Programming Help"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Dual Interfaces",
      description: "Chat in a modern graphical window or classic console—both with file handling and streaming support.",
      highlights: ["Console & GUI", "File Uploads", "Streaming Chat"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Rich File Handling",
      description: "Work with text, images, PDF, DOCX, XLSX, and PPTX directly in chat. Analyze, summarize, and process documents and images.",
      highlights: ["Multi-format Support", "Document Analysis", "Image Processing"]
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern AI Workflows
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold text-sm">Apache 2.0</span>
            <span className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">Status: Beta</span>
            <span className="inline-flex items-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold text-sm">Enterprise-Grade</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AgentCrew provides enterprise-grade AI teamwork, personalization, and user control. Build specialized multi-agent teams, connect to any model, and orchestrate complex workflows securely.
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
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your AI Team?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get started with AgentCrew today and experience the power of collaborative AI agents.
            </p>
              <a
              href="#installation"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-semibold"
            >
              <Settings className="w-5 h-5 mr-2" />
              Start Building
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
