import { Github, ExternalLink, Heart, Code, Users, FileText } from 'lucide-react'
import agentcrewLogo from '../../assets/agentcrew_logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Core Concepts', href: '#core-concepts' },
      { name: 'Use Cases', href: '#use-cases' },
      { name: 'Installation', href: '#installation' },
      { name: 'Security', href: '#security' }
    ],
    resources: [
      { name: 'GitHub Repository', href: 'https://github.com/saigontechnology/AgentCrew', external: true },
      { name: 'Documentation', href: 'https://github.com/saigontechnology/AgentCrew#readme', external: true },
      { name: 'Examples', href: 'https://github.com/saigontechnology/AgentCrew/tree/main/examples', external: true },
      { name: 'Issues & Support', href: 'https://github.com/saigontechnology/AgentCrew/issues', external: true }
    ],
    community: [
      { name: 'Contribute', href: 'https://github.com/saigontechnology/AgentCrew/blob/main/CONTRIBUTING.md', external: true },
      { name: 'Star on GitHub', href: 'https://github.com/saigontechnology/AgentCrew', external: true },
      { name: 'Report Issues', href: 'https://github.com/saigontechnology/AgentCrew/issues/new', external: true },
      { name: 'Feature Requests', href: 'https://github.com/saigontechnology/AgentCrew/issues/new', external: true }
    ]
  }

  const stats = [
    { icon: <Code className="w-5 h-5" />, label: 'Open Source', value: 'MIT License' },
    { icon: <Users className="w-5 h-5" />, label: 'AI Providers', value: '6+ Supported' },
    { icon: <FileText className="w-5 h-5" />, label: 'Python', value: '3.12+ Required' }
  ]

  return (
    <footer className="bg-accent-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={agentcrewLogo}
                alt="AgentCrew Logo" 
                className="h-8 w-auto"
              />
              <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
              <span className="text-xl font-bold gradient-text">AgentCrew</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              AgentCrew: Your Multi-Agent AI Assistant Framework. Build teams of specialized AI agents that collaborate to solve complex problems and automate tasks—now in Beta, MIT Licensed, Python 3.12+.
            </p>
            <div className="flex flex-col items-start space-y-3">
              <div className="text-white text-lg font-semibold uppercase tracking-wider">Backed By</div>
              <img 
                src="https://saigontechnology.com/wp-content/uploads/2024/09/logo-1.svg" 
                alt="Saigon Technology"
                width="200"
              />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Community</h3>
            <ul className="space-y-4">
              {links.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-3 text-center sm:text-left">
                <div className="p-2 bg-primary-500 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="font-semibold">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Saigon Technology. AgentCrew is open source under the MIT License.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the AI community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer