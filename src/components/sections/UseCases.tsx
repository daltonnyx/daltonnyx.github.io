import {
  Code,
  FileText,
  TrendingUp,
  Users,
  Lightbulb,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description:
        "Accelerate development with specialized agents for code review, debugging, documentation, and testing.",
      benefits: [
        "Automated code reviews and suggestions",
        "Bug detection and debugging assistance",
        "Documentation generation",
        "Test case creation and validation",
      ],
      color: "from-blue-500 to-cyan-500",
      audience: "Developers & Engineering Teams",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Analysis",
      description:
        "Create comprehensive market research, competitive analysis, and strategic insights with research and analysis agents.",
      benefits: [
        "Market research and trend analysis",
        "Competitive intelligence gathering",
        "Data-driven strategic recommendations",
        "Automated report generation",
      ],
      color: "from-green-500 to-emerald-500",
      audience: "Business Analysts & Strategists",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Creation",
      description:
        "Streamline content workflows with agents specialized in research, writing, editing, and optimization.",
      benefits: [
        "Research-backed content creation",
        "Multi-format content adaptation",
        "SEO optimization and analysis",
        "Editorial review and enhancement",
      ],
      color: "from-purple-500 to-pink-500",
      audience: "Content Teams & Marketers",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Support",
      description:
        "Enhance support operations with agents that can research, analyze, and provide comprehensive solutions.",
      benefits: [
        "Intelligent ticket analysis and routing",
        "Knowledge base integration",
        "Multi-language support capabilities",
        "Escalation and follow-up automation",
      ],
      color: "from-orange-500 to-red-500",
      audience: "Support Teams & Customer Success",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Research & Innovation",
      description:
        "Accelerate research projects with agents that can gather information, analyze data, and synthesize insights.",
      benefits: [
        "Literature review and synthesis",
        "Data collection and analysis",
        "Hypothesis generation and testing",
        "Research report compilation",
      ],
      color: "from-indigo-500 to-purple-500",
      audience: "Researchers & Innovation Teams",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance & Security",
      description:
        "Ensure regulatory compliance with agents that can review policies, analyze risks, and generate reports.",
      benefits: [
        "Policy review and compliance checking",
        "Risk assessment and mitigation",
        "Audit trail documentation",
        "Regulatory reporting automation",
      ],
      color: "from-red-500 to-pink-500",
      audience: "Compliance & Security Teams",
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Workflows with AI Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            AgentCrew is for developers, analysts, content creators, support
            teams, researchers, and anyone building with AI. Create custom agent
            teams to automate, analyze, and innovate—no matter your domain.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Discover how different teams and industries are leveraging AgentCrew
            to solve complex challenges and accelerate their work.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg card-hover overflow-hidden"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${useCase.color} p-6 text-white`}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{useCase.title}</h3>
                    <p className="text-white/80 text-sm">{useCase.audience}</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {useCase.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Key Benefits:
                </h4>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Build Your Custom AI Workflow?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join developers, analysts, and teams worldwide who are already using
            AgentCrew to transform their workflows and boost productivity.
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
              View Examples
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;

