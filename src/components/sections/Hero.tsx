import { ArrowRight, Download, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-500 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Open Source • Apache 2.0 • Beta Release
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Multi-Agent AI
            <br />
            <span className="gradient-text">Assistant Framework</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build powerful AI assistants by creating specialized agent teams
            that work together. Support for OpenAI, Claude, Gemini, GitHub
            Copilot, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#installation"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="https://github.com/saigontechnology/AgentCrew"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold text-lg border border-gray-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">6+</div>
              <div className="text-gray-600">AI Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                Python 3.12+
              </div>
              <div className="text-gray-600">Modern Stack</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                Apache 2.0
              </div>
              <div className="text-gray-600">Open Source</div>
            </div>
          </div>

          {/* Demo Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  AgentCrew Terminal
                </div>
                <div className="w-6"></div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-green-400 mb-2">$ agentcrew chat</div>
                <div className="text-gray-300 mb-2">
                  [INIT] AgentCrew initialized with 3 agents
                </div>
                <div className="text-gray-300 mb-2">
                  [CONN] Connected to OpenAI GPT-4
                </div>
                <div className="text-blue-400 mb-2">
                  [CHAT] How can I help you today?
                </div>
                <div className="text-white mb-2">
                  &gt; Create a comprehensive market analysis for AI tools
                </div>
                <div className="text-yellow-400 mb-2">
                  [TRANSFER] Transferring to ResearchAgent...
                </div>
                <div className="text-green-400 mb-2">
                  [SUCCESS] Research completed. Transferring to AnalystAgent...
                </div>
                <div className="text-green-400">
                  [READY] Analysis ready! Here's your comprehensive report...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
