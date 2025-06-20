import { Link } from "react-router-dom"

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: "Courses", href: "/courses", icon: "📚" },
      { name: "Skills", href: "/skills", icon: "🎯" },
      { name: "Community", href: "/community", icon: "👥" },
      { name: "Hackathons", href: "/hackathons", icon: "🏆" },
    ],
    Tools: [
      { name: "AI Assistant", href: "/ai-assistant", icon: "🤖" },
      { name: "Resume Builder", href: "/resume", icon: "📄" },
      { name: "Portfolio", href: "/portfolio", icon: "🎨" },
      { name: "Mentors", href: "/mentors", icon: "🧑‍🏫" },
    ],
    Company: [
      { name: "About Us", href: "/about", icon: "ℹ️" },
      { name: "Careers", href: "/careers", icon: "💼" },
      { name: "Blog", href: "/blog", icon: "📝" },
      { name: "Contact", href: "/contact", icon: "📧" },
    ],
    Support: [
      { name: "Help Center", href: "/help", icon: "❓" },
      { name: "Privacy Policy", href: "/privacy", icon: "🔒" },
      { name: "Terms of Service", href: "/terms", icon: "📋" },
      { name: "Cookie Policy", href: "/cookies", icon: "🍪" },
    ],
  }

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "GitHub", href: "#", icon: "🐙" },
    { name: "Discord", href: "#", icon: "💬" },
    { name: "YouTube", href: "#", icon: "📺" },
  ]

  return (
    <footer className="bg-black/50 border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold gradient-text-blue">Skillistan</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Empowering learners worldwide with AI-powered education, gamified progress tracking, and a supportive
              community of mentors and peers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                  title={social.name}
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
                    >
                      <span className="transform group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Skillistan. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm flex items-center space-x-2">
                <span>Made with</span>
                <span className="text-red-400 animate-pulse">❤️</span>
                <span>for learners worldwide</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
