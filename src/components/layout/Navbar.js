"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useAuth } from "../../contexts/AuthContext"
import { useTheme } from "../../contexts/ThemeContext"
import { Button } from "../ui/button"
import { Magnetic, HoverLift } from "../ui/motion"
import { Menu, X, Bell, Sun, Moon } from "lucide-react"

const Navbar = () => {
  const { user, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Skills", href: "/skills" },
    { name: "Community", href: "/community" },
    { name: "Hackathons", href: "/hackathons" },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`rb-fixed rb-top-0 rb-left-0 rb-right-0 rb-z-50 transition-all duration-300 ${
        scrolled ? "rb-glass-strong shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="rb-container">
        <div className="rb-flex rb-items-center rb-justify-between" style={{ height: "4rem" }}>
          {/* Logo */}
          <Magnetic strength={0.2}>
            <Link to="/" className="rb-flex rb-items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="rb-relative"
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                    borderRadius: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="rb-hover-glow"
                >
                  <span className="rb-text-white rb-font-bold rb-text-lg">S</span>
                </div>
                <div
                  className="rb-absolute rb-inset-0 rb-rounded-xl blur opacity-30"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                  }}
                />
              </motion.div>
              <span className="rb-text-xl rb-font-bold rb-gradient-text-blue">Skillistan</span>
            </Link>
          </Magnetic>

          {/* Desktop Navigation */}
          <div className="rb-hidden md:rb-flex rb-items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  to={item.href}
                  className={`rb-relative rb-px-4 rb-py-2 rb-rounded-lg rb-text-sm rb-font-medium transition-all duration-300 ${
                    isActive(item.href) ? "rb-text-blue-400" : "rb-text-gray-300 hover:rb-text-white"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="rb-absolute rb-inset-0 rb-rounded-lg"
                      style={{ background: "rgba(59, 130, 246, 0.1)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side */}
          <div className="rb-flex rb-items-center space-x-4">
            {/* Theme Toggle */}
            <Magnetic strength={0.1}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="rb-p-2 rb-rounded-lg rb-glass hover:rb-glass-strong transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </Magnetic>

            {user ? (
              <div className="rb-flex rb-items-center space-x-4">
                {/* Notifications */}
                <Magnetic strength={0.1}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rb-relative rb-p-2 rb-rounded-lg rb-glass hover:rb-glass-strong transition-all duration-300"
                  >
                    <Bell size={20} />
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="rb-absolute -rb-top-1 -rb-right-1 rb-w-3 rb-h-3 rb-rounded-full"
                      style={{ background: "#ef4444" }}
                    />
                  </motion.button>
                </Magnetic>

                {/* User Menu */}
                <HoverLift>
                  <div className="rb-relative">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="rb-flex rb-items-center space-x-3 rb-p-2 rb-rounded-lg rb-glass hover:rb-glass-strong transition-all duration-300"
                    >
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={user.avatar || "https://via.placeholder.com/32x32"}
                        alt={user.name}
                        className="rb-w-8 rb-h-8 rb-rounded-full"
                        style={{ border: "2px solid rgba(59, 130, 246, 0.2)" }}
                      />
                      <div className="rb-hidden md:rb-block rb-text-left">
                        <div className="rb-text-sm rb-font-medium rb-text-white">{user.name}</div>
                        <div className="rb-text-xs rb-text-gray-400">
                          Level {user.level} • {user.xp} XP
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </HoverLift>
              </div>
            ) : (
              <div className="rb-flex rb-items-center space-x-3">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button variant="primary" size="sm" asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:rb-hidden rb-p-2 rb-rounded-lg rb-glass hover:rb-glass-strong transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:rb-hidden rb-py-4 rb-border-t"
              style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={item.href}
                    className={`rb-block rb-px-4 rb-py-3 rb-rounded-lg rb-text-base rb-font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? "rb-text-blue-400 rb-glass"
                        : "rb-text-gray-300 hover:rb-text-white hover:rb-glass"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
