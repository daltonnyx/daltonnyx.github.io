import { ArrowRight, Download, Github, Maximize2 } from "lucide-react";

const Hero = () => {
  const handleFullscreen = () => {
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (video) {
      try {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if ((video as any).webkitRequestFullscreen) {
          (video as any).webkitRequestFullscreen();
        } else if ((video as any).msRequestFullscreen) {
          (video as any).msRequestFullscreen();
        }
      } catch (error) {
        console.warn("Fullscreen not supported or failed:", error);
      }
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content - Centered Layout */}
        <div className="text-center mb-16">
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
            that work together. Support for OpenAI, Claude, Gemini, Deepinfra,
            and more.
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-2xl mx-auto">
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
        </div>

        {/* Demo Video Section - Full Width Row */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              See AgentCrew in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how multiple AI agents collaborate to solve complex tasks
              through intelligent coordination and knowledge sharing.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-[1.01]">
              {/* Video Container */}
              <div className="relative aspect-video bg-gray-800">
                <video
                  className="w-full h-full object-cover transition-all duration-300 hover:brightness-110"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="AgentCrew Demo Video - Showing the AI assistant framework in action"
                  id="hero-video"
                >
                  <source src="/agentcrew_demo.mp4" type="video/mp4" />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center animate-pulse">
                      <div className="text-gray-400 text-lg mb-2">
                        🎥 Demo Video Unavailable
                      </div>
                      <p className="text-gray-500 text-sm">
                        Your browser doesn't support video playback.
                        <br />
                        Please use a modern browser to view the AgentCrew demo.
                      </p>
                    </div>
                  </div>
                </video>

                {/* Fullscreen Button - Bottom Right Corner */}
                <button
                  onClick={handleFullscreen}
                  className="absolute bottom-4 right-4 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-200 hover:scale-110 group backdrop-blur-sm"
                  aria-label="View video in fullscreen"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-5 h-5 text-white group-hover:text-primary-400 transition-colors duration-200" />
                </button>
              </div>
            </div>

            {/* Video Caption */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Real-time demonstration of multi-agent AI collaboration and task
                delegation
              </p>
            </div>
          </div>
        </div>

        {/* Terminal Demo Section - Optional Secondary Demo */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Interactive Terminal Preview
            </h3>
            <p className="text-gray-600">
              Experience AgentCrew's powerful multi-agent collaboration
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
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
              <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto">
                <pre className="text-green-400 mb-4">{` █████╗   ██████╗  ███████╗ ███╗   ██╗ ████████╗  ██████╗ ██████╗  ███████╗ ██╗    ██╗
 ██╔══██╗ ██╔════╝  ██╔════╝ ████╗  ██║ ╚══██╔══╝ ██╔════╝ ██╔══██╗ ██╔════╝ ██║    ██║
 ███████║ ██║  ███╗ █████╗   ██╔██╗ ██║    ██║    ██║      ██████╔╝ █████╗   ██║ █╗ ██║
 ██╔══██║ ██║   ██║ ██╔══╝   ██║╚██╗██║    ██║    ██║      ██╔══██╗ ██╔══╝   ██║███╗██║
 ██║  ██║ ╚██████╔╝ ███████╗ ██║ ╚████║    ██║    ╚██████╗ ██║  ██║ ███████╗ ╚███╔███╔╝
 ╚═╝  ╚═╝  ╚═════╝  ╚══════╝ ╚═╝  ╚═══╝    ╚═╝     ╚═════╝ ╚═╝  ╚═╝ ╚══════╝  ╚══╝╚══╝ `}</pre>
                
                <div className="border border-gray-700 rounded-lg p-4 mb-4">
                  <div className="text-blue-400 mb-2">🎮 Welcome to AgentCrew v0.6.6 interactive chat!</div>
                  <div className="text-gray-400 mb-1">Press Ctrl+C twice to exit.</div>
                  <div className="text-gray-400 mb-1">Type 'exit' or 'quit' to end the session.</div>
                  <div className="text-gray-400 mb-1">Use '/file &lt;file_path&gt;' to include a file in your message.</div>
                  <div className="text-gray-400 mb-1">Use '/clear' to clear the conversation history.</div>
                  <div className="text-gray-400 mb-1">Use '/think &lt;budget&gt;' to enable Claude's thinking mode (min 1024 tokens).</div>
                  <div className="text-gray-400 mb-1">Use '/think 0' to disable thinking mode.</div>
                  <div className="text-gray-400 mb-1">Use '/model [model_id]' to switch models or list available models.</div>
                  <div className="text-gray-400 mb-1">Use '/jump &lt;turn_number&gt;' to rewind the conversation to a previous turn.</div>
                  <div className="text-gray-400 mb-1">Use '/copy' to copy the latest assistant response to clipboard.</div>
                  <div className="text-gray-400 mb-1">Use '/agent [agent_name]' to switch agents or list available agents.</div>
                  <div className="text-gray-400 mb-1">Use '/list' to list saved conversations.</div>
                  <div className="text-gray-400 mb-1">Use '/load &lt;id&gt;' or '/load &lt;number&gt;' to load a conversation.</div>
                  <div className="text-gray-400 mb-1">Use '/consolidate [count]' to summarize older messages (default: 10 recent messages preserved).</div>
                  <div className="text-gray-400">Tool calls require confirmation before execution.</div>
                </div>
                
                <div className="mb-2">
                  <span className="text-purple-400">[ReactAgent:deepinfra/Qwen/Qwen3-Coder-480B-A35B-Instruct]</span>
                </div>
                <div>
                  <span className="text-gray-400">(Press Enter for new line, Ctrl+S/Alt+Enter to submit, Up/Down for history, Ctrl+V to paste)</span>
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

