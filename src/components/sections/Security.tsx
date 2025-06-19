import { 
  Shield, 
  Lock, 
  Eye, 
  UserCheck, 
  AlertTriangle, 
  CheckCircle,
  Key,
  FileCheck
} from 'lucide-react'

const Security = () => {
  const securityFeatures = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Tool Call Approval",
      description: "You have complete control over when and how agents use tools. AgentCrew asks for your explicit permission before executing any tool.",
      benefits: ["Manual approval required", "Real-time permission requests", "Full audit trail"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparent Operations",
      description: "See exactly what each agent is doing, what tools they want to use, and what data they're accessing before giving approval.",
      benefits: ["Complete visibility", "Operation logging", "Decision tracking"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure API Management",
      description: "API keys and sensitive credentials are managed securely through environment variables or the GUI configuration system.",
      benefits: ["Environment variables", "Encrypted storage", "No hardcoded secrets"]
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Controlled File Access",
      description: "Agents can only access files and directories that you explicitly allow, with clear boundaries and permission controls.",
      benefits: ["Restricted file access", "Directory boundaries", "Permission controls"]
    }
  ]

  const bestPractices = [
    "Review all agent prompts and tool configurations before deployment",
    "Give agents only the minimum permissions they truly need",
    "Never include sensitive information like passwords or API keys in agent prompts",
    "Regularly audit tool usage and agent activities",
    "Use the approval system to maintain control over agent actions",
    "Keep AgentCrew and dependencies updated to the latest versions"
  ]

  const responsibilities = [
    "The instructions and prompts you provide to your AI agents",
    "The tools and permissions you grant to agents",
    "Any results, actions, or consequences from your agent configurations",
    "Protecting sensitive data and maintaining appropriate security measures"
  ]

  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Security and Responsible Usage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built with Security and Control in Mind
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            AgentCrew prioritizes user control and security. You approve every tool call, set explicit permissions, and define secure agent boundaries—giving you oversight over all actions and data access.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            <strong>Never put secrets in prompts or agent configs.</strong> Review permissions and tool settings carefully to avoid leaks or unintended actions.
          </p>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Security Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 text-green-600 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{feature.title}</h4>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Security Best Practices</h3>
            </div>
            <ul className="space-y-4">
              {bestPractices.map((practice, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{practice}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <Key className="w-8 h-8 text-orange-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Your Responsibilities</h3>
            </div>
            <p className="text-gray-600 mb-4">
              As the user, you are responsible for:
            </p>
            <ul className="space-y-4">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Security Advisory */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Important Security Advisory
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  <strong>AgentCrew is a powerful tool that requires responsible usage.</strong> 
                  You control how AgentCrew and its AI agents work, and you are responsible for their configuration and usage.
                </p>
                <div className="bg-white/50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Security Reminders:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Always review prompts and tool settings before deployment</li>
                    <li>• Use the Tool Call Approval feature to maintain control</li>
                    <li>• Never include sensitive credentials in agent prompts</li>
                    <li>• Be cautious with tools that access files or the internet</li>
                    <li>• Regularly audit agent activities and permissions</li>
                  </ul>
                </div>
                <p className="text-base">
                  The Tool Call Approval feature helps you manage risks, but ultimate responsibility 
                  for security and appropriate usage rests with you as the user.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Building Securely?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            With AgentCrew's security features and your responsible usage, 
            you can build powerful AI workflows with confidence.
          </p>
          <a
            href="#installation"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Shield className="w-5 h-5 mr-2" />
            Get Started Securely
          </a>
        </div>
      </div>
    </section>
  )
}

export default Security