import { Users, ArrowRightLeft, Cpu } from "lucide-react";

const CoreConcepts = () => {
  const concepts = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "AI Teamwork",
      description:
        "Just like a human team, each AI agent specializes in a role. AgentCrew lets you create agents with unique skills and tools that collaborate to solve complex problems—mirroring real-world teamwork.",
      example:
        "A Research Agent gathers info, a Writer Agent drafts summaries, and a Code Agent reviews code—all working together on your task.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <ArrowRightLeft className="w-12 h-12" />,
      title: "Smart Task Sharing",
      description:
        "Agents know when and how to hand off tasks, following clear protocols for sharing work and context. The right agent takes over at the right time for efficient, expert results.",
      example:
        "A Research Agent finds data, then hands off to an Analyst Agent for processing, who passes results to a Writer Agent for reporting.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Flexible AI Model Selection",
      description:
        "Mix and match AI models from OpenAI, Anthropic, Google, Deepinfra and more—switch providers or models as needed for each workflow.",
      example:
        "Use o3 for reasoning, sonnet-4 for writing, Gemini for research, Qwen3-Coder for code suggestions—all in a single project.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="core-concepts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Core Ideas Behind AgentCrew
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AgentCrew is built on three fundamental principles that make AI
            collaboration powerful, flexible, and intuitive.
          </p>
        </div>

        {/* Concepts */}
        <div className="space-y-16">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${concept.color} text-white`}
                  >
                    {concept.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {concept.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {concept.description}
                </p>

                <div className="bg-white p-6 rounded-xl border-l-4 border-primary-500 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Example:</h4>
                  <p className="text-gray-700 italic">{concept.example}</p>
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  {index === 0 && (
                    <div className="space-y-4">
                      <div className="text-center text-gray-700 font-semibold mb-6">
                        Agent Specialization
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-100 p-4 rounded-lg text-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                          <div className="text-sm font-medium text-blue-700">
                            Research Agent
                          </div>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg text-center">
                          <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                          <div className="text-sm font-medium text-green-700">
                            Writing Agent
                          </div>
                        </div>
                        <div className="bg-purple-100 p-4 rounded-lg text-center">
                          <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2"></div>
                          <div className="text-sm font-medium text-purple-700">
                            Code Agent
                          </div>
                        </div>
                        <div className="bg-orange-100 p-4 rounded-lg text-center">
                          <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2"></div>
                          <div className="text-sm font-medium text-orange-700">
                            Analysis Agent
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="space-y-6">
                      <div className="text-center text-gray-700 font-semibold mb-6">
                        Task Flow
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            1
                          </div>
                          <div className="flex-1 bg-blue-100 p-3 rounded-lg text-blue-700 text-sm">
                            Research Task
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <ArrowRightLeft className="w-6 h-6 text-gray-400" />
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            2
                          </div>
                          <div className="flex-1 bg-purple-100 p-3 rounded-lg text-purple-700 text-sm">
                            Analysis Task
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <ArrowRightLeft className="w-6 h-6 text-gray-400" />
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            3
                          </div>
                          <div className="flex-1 bg-green-100 p-3 rounded-lg text-green-700 text-sm">
                            Writing Task
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="space-y-4">
                      <div className="text-center text-gray-700 font-semibold mb-6">
                        AI Model Flexibility
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium">
                            OpenAI GPT-4.1
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                          <span className="text-sm font-medium">
                            Anthropic Claude Sonnet-4
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                          <span className="text-sm font-medium">
                            Google Gemini 2.5 Pro
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                          <span className="text-sm font-medium">
                            Qwen3 Coder hosted in Deepinfra
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreConcepts;
