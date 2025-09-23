import { useState } from "react";
import { Menu, X, Star } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
import agentcrewLogo from "../../assets/agentcrew_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (href: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If on home page, just scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navigation = [
    { name: "Features", href: "#features", type: "anchor" },
    { name: "Core Concepts", href: "#core-concepts", type: "anchor" },
    { name: "Use Cases", href: "#use-cases", type: "anchor" },
    { name: "Installation", href: "#installation", type: "anchor" },
    { name: "Releases", href: "/releases", type: "route" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={agentcrewLogo}
              alt="AgentCrew Logo"
              className="h-8 w-auto"
            />
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <span className="text-xl font-bold gradient-text">AgentCrew</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              if (item.type === "route") {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "transition-colors duration-200 font-medium",
                      location.pathname === item.href
                        ? "text-primary-500"
                        : "text-gray-600 hover:text-primary-500",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              } else {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleAnchorClick(item.href)}
                    className="text-gray-600 hover:text-primary-500 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                );
              }
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/saigontechnology/AgentCrew"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium flex items-center space-x-2"
            >
              <Star className="w-4 h-4" />
              <span>Star on GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden",
          )}
        >
          <nav className="py-4 space-y-4">
            {navigation.map((item) => {
              if (item.type === "route") {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block transition-colors duration-200 font-medium",
                      location.pathname === item.href
                        ? "text-primary-600"
                        : "text-gray-600 hover:text-primary-600",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              } else {
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleAnchorClick(item.href);
                    }}
                    className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium text-left"
                  >
                    {item.name}
                  </button>
                );
              }
            })}
            <div className="pt-4 border-t border-gray-200 space-y-4">
              <a
                href="https://github.com/saigontechnology/AgentCrew"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium"
              >
                <Star className="w-4 h-4" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
