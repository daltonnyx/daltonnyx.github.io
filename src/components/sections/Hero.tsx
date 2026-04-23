import { ArrowRight, Download, Github } from "lucide-react";

const Hero = () => {
  const handleGetStarted = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const installationSection = document.getElementById("installation");
    if (installationSection) {
      installationSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-500 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Open Source &bull; Apache 2.0 &bull; Beta
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Multi-Agent AI
            <br />
            <span className="gradient-text">Assistant Framework</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your team of AI specialists for coding, research, and automation.
            Run multiple focused agents from a desktop app, terminal, or API.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#installation"
              onClick={handleGetStarted}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">6+</div>
              <div className="text-gray-600">AI Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                GUI &amp; CLI
              </div>
              <div className="text-gray-600">Two Interfaces</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                Apache 2.0
              </div>
              <div className="text-gray-600">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
