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
  CheckCircle
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Wide AI Model Support",
      description: "Works with Anthropic Claude, Google Gemini, OpenAI GPT, Groq, DeepInfra, and GitHub Copilot. Switch between providers seamlessly.",
      highlights: ["6+ AI Providers", "GitHub Copilot", "Custom Providers"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strong Agent Capabilities",
      description: "Define multiple AI agents with specialized expertise. Agents can intelligently transfer tasks to each other when needed.",
      highlights: ["Multi-Agent System", "Task Transfer", "Custom Prompts"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tool Call Approval",
      description: "You decide if an agent can use a tool. AgentCrew asks for your permission before any tool is executed, giving you complete control.",
      highlights: ["User Control", "Security First", "Permission System"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Model Context Protocol",
      description: "Connect agents to external tools like Jira, databases, and APIs through the standardized MCP interface.",
      highlights: ["External Tools", "Jira Integration", "API Connections"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Web Search & Research",
      description: "Agents can find current information online with your approval, ensuring access to the latest data and insights.",
      highlights: ["Real-time Data", "Web Research", "Current Information"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Conversation Memory",
      description: "Agents remember past conversations and context, providing more relevant and personalized responses over time.",
      highlights: ["Context Aware", "Persistent Memory", "Personalized"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Assistance",
      description: "Specialized agents can analyze code, help with debugging, and assist with various programming tasks and reviews.",
      highlights: ["Code Analysis", "Debugging Help", "Programming Support"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Dual Interfaces",
      description: "Chat with AgentCrew using either a text console or a modern graphical interface. Both support file handling and streaming.",
      highlights: ["Console & GUI", "File Support", "Streaming Responses"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Rich File Handling",
      description: "Work with text, images, PDF, DOCX, XLSX, and PPTX files directly in chat. Agents can process and analyze various formats.",
      highlights: ["Multiple Formats", "Document Analysis", "Image Processing"]
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AgentCrew provides enterprise-grade capabilities with user-friendly interfaces, 
            giving you the power to build sophisticated AI assistant teams.
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
                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg mr-4">
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
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
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