"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useAuth } from "../contexts/AuthContext"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import {
  StaggerContainer,
  StaggerItem,
  FadeInUp,
  ScaleIn,
  HoverLift,
  Float,
  Pulse,
  Magnetic,
} from "../components/ui/motion"
import { GraduationCap, Bot, Trophy, Users, BarChart3, Target, Star, ArrowRight, Sparkles } from "lucide-react"

const Home = () => {
  const { user } = useAuth()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const features = [
    {
      icon: GraduationCap,
      title: "Interactive Learning",
      description: "Immersive courses with hands-on projects and real-world applications",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    },
    {
      icon: Bot,
      title: "AI-Powered Tutor",
      description: "Personal AI assistant that adapts to your learning style and pace",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    },
    {
      icon: Trophy,
      title: "Gamified Progress",
      description: "Earn XP, unlock achievements, and compete on global leaderboards",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with mentors, peers, and industry experts worldwide",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Track your progress with detailed insights and personalized recommendations",
      gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    },
    {
      icon: Target,
      title: "Career Focused",
      description: "Build skills that matter with industry-aligned learning paths",
      gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    },
  ]

  const stats = [
    { number: "50K+", label: "Active Learners", icon: "👨‍🎓" },
    { number: "1000+", label: "Expert Courses", icon: "📚" },
    { number: "100+", label: "Industry Mentors", icon: "🧑‍🏫" },
    { number: "98%", label: "Success Rate", icon: "🎯" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      avatar: "https://via.placeholder.com/60x60",
      content: "Skillistan transformed my career. The AI tutor helped me master React in just 3 months!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      avatar: "https://via.placeholder.com/60x60",
      content: "The gamified learning approach kept me motivated. I earned 15 certifications this year!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      avatar: "https://via.placeholder.com/60x60",
      content: "Amazing community and mentorship. The portfolio builder landed me my dream job!",
      rating: 5,
    },
  ]

  return (
    <div className="rb-min-h-screen rb-overflow-hidden" style={{ backgroundColor: "hsl(var(--background))" }}>
      {/* Animated Background */}
      <div className="rb-fixed rb-inset-0 rb-overflow-hidden" style={{ pointerEvents: "none" }}>
        <motion.div
          animate={{
            x: mousePosition.x / 50,
            y: mousePosition.y / 50,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="rb-absolute rb-w-96 rb-h-96 rb-rounded-full blur-3xl"
          style={{
            background: "rgba(59, 130, 246, 0.1)",
            left: "10%",
            top: "20%",
          }}
        />
        <motion.div
          animate={{
            x: -mousePosition.x / 80,
            y: -mousePosition.y / 80,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 40 }}
          className="rb-absolute rb-w-96 rb-h-96 rb-rounded-full blur-3xl"
          style={{
            background: "rgba(139, 92, 246, 0.1)",
            right: "10%",
            bottom: "20%",
          }}
        />
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="rb-absolute rb-w-72 rb-h-72 rb-rounded-full blur-2xl"
          style={{
            background: "rgba(236, 72, 153, 0.05)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="rb-relative rb-min-h-screen rb-flex rb-items-center rb-justify-center rb-px-4 sm:rb-px-6 lg:rb-px-8">
        <div className="rb-container rb-text-center">
          <StaggerContainer>
            <StaggerItem>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                className="rb-mb-8"
              >
                <Float>
                  <Sparkles className="rb-mx-auto rb-mb-6 rb-text-blue-400" size={48} />
                </Float>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.h1
                className="rb-text-5xl md:rb-text-6xl lg:rb-text-7xl rb-font-bold rb-mb-8"
                style={{ lineHeight: "1.1" }}
              >
                Master Skills with
                <motion.span
                  className="rb-block rb-gradient-text-rainbow rb-mt-2"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  AI-Powered Learning
                </motion.span>
              </motion.h1>
            </StaggerItem>

            <StaggerItem>
              <motion.p
                className="rb-text-xl md:rb-text-2xl rb-text-gray-400 rb-mb-12 rb-max-w-4xl rb-mx-auto"
                style={{ lineHeight: "1.6" }}
              >
                Join the future of education with personalized AI tutoring, gamified progress tracking, and a global
                community of learners and mentors.
              </motion.p>
            </StaggerItem>

            <StaggerItem>
              <motion.div className="rb-flex rb-flex-col sm:rb-flex-row rb-gap-6 rb-justify-center rb-items-center rb-mb-16">
                {user ? (
                  <Magnetic strength={0.2}>
                    <Button size="lg" asChild>
                      <Link to="/dashboard" className="rb-flex rb-items-center rb-gap-2">
                        Continue Learning
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <ArrowRight size={20} />
                        </motion.div>
                      </Link>
                    </Button>
                  </Magnetic>
                ) : (
                  <>
                    <Magnetic strength={0.2}>
                      <Button size="lg" asChild>
                        <Link to="/register" className="rb-flex rb-items-center rb-gap-2">
                          Start Learning Free
                          <Sparkles size={20} />
                        </Link>
                      </Button>
                    </Magnetic>
                    <Magnetic strength={0.1}>
                      <Button variant="secondary" size="lg" asChild>
                        <Link to="/courses">Explore Courses</Link>
                      </Button>
                    </Magnetic>
                  </>
                )}
              </motion.div>
            </StaggerItem>

            {/* Stats */}
            <StaggerItem>
              <motion.div className="rb-grid rb-grid-cols-2 md:rb-grid-cols-4 rb-gap-8 rb-max-w-4xl rb-mx-auto">
                {stats.map((stat, index) => (
                  <ScaleIn key={index} delay={index * 0.1}>
                    <div className="rb-text-center">
                      <Pulse>
                        <div className="rb-text-4xl rb-mb-2">{stat.icon}</div>
                      </Pulse>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 1 + index * 0.1,
                          duration: 0.8,
                          type: "spring",
                          bounce: 0.6,
                        }}
                        className="rb-text-3xl md:rb-text-4xl rb-font-bold rb-gradient-text-blue rb-mb-1"
                      >
                        {stat.number}
                      </motion.div>
                      <div className="rb-text-gray-400 rb-text-sm">{stat.label}</div>
                    </div>
                  </ScaleIn>
                ))}
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="rb-absolute rb-bottom-8 rb-left-1/2"
          style={{ transform: "translateX(-50%)" }}
        >
          <div
            className="rb-w-6 rb-h-10 rb-border-2 rb-rounded-full rb-flex rb-justify-center"
            style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="rb-w-1 rb-h-3 rb-rounded-full rb-mt-2"
              style={{ background: "rgba(255, 255, 255, 0.4)" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="rb-py-32 rb-px-4 sm:rb-px-6 lg:rb-px-8 rb-relative">
        <div className="rb-container">
          <FadeInUp>
            <div className="rb-text-center rb-mb-20">
              <motion.h2 className="rb-text-4xl md:rb-text-5xl rb-font-bold rb-mb-6 rb-gradient-text">
                Why Choose Skillistan?
              </motion.h2>
              <motion.p className="rb-text-xl rb-text-gray-400 rb-max-w-3xl rb-mx-auto">
                Experience the next generation of learning with cutting-edge technology and proven methodologies.
              </motion.p>
            </div>
          </FadeInUp>

          <StaggerContainer>
            <div className="rb-grid rb-grid-cols-1 md:rb-grid-cols-2 lg:rb-grid-cols-3 rb-gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <Card hover glow spotlight className="rb-h-full">
                    <div className="rb-relative">
                      <HoverLift>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="rb-w-16 rb-h-16 rb-rounded-2xl rb-flex rb-items-center rb-justify-center rb-mb-6 rb-hover-glow"
                          style={{ background: feature.gradient }}
                        >
                          <feature.icon size={32} className="rb-text-white" />
                        </motion.div>
                      </HoverLift>
                      <h3 className="rb-text-xl rb-font-bold rb-text-white rb-mb-4">{feature.title}</h3>
                      <p className="rb-text-gray-400 rb-line-clamp-3">{feature.description}</p>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="rb-py-32 rb-px-4 sm:rb-px-6 lg:rb-px-8 rb-relative">
        <div className="rb-container">
          <FadeInUp>
            <div className="rb-text-center rb-mb-20">
              <motion.h2 className="rb-text-4xl md:rb-text-5xl rb-font-bold rb-mb-6 rb-gradient-text-purple">
                Loved by Learners Worldwide
              </motion.h2>
              <motion.p className="rb-text-xl rb-text-gray-400 rb-max-w-3xl rb-mx-auto">
                Join thousands of successful learners who transformed their careers with Skillistan.
              </motion.p>
            </div>
          </FadeInUp>

          <StaggerContainer>
            <div className="rb-grid rb-grid-cols-1 md:rb-grid-cols-3 rb-gap-8">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <Card hover className="rb-h-full">
                    <div className="rb-flex rb-items-center rb-mb-4">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="rb-w-12 rb-h-12 rb-rounded-full rb-mr-4"
                      />
                      <div>
                        <h4 className="rb-font-semibold rb-text-white">{testimonial.name}</h4>
                        <p className="rb-text-sm rb-text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="rb-text-gray-300 rb-mb-4 rb-italic">"{testimonial.content}"</p>
                    <div className="rb-flex rb-gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                        >
                          <Star className="rb-text-yellow-400" size={16} fill="currentColor" />
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rb-py-32 rb-px-4 sm:rb-px-6 lg:rb-px-8 rb-relative">
        <div className="rb-container">
          <FadeInUp>
            <Card glow className="rb-max-w-4xl rb-mx-auto rb-text-center">
              <motion.h2 className="rb-text-4xl md:rb-text-5xl rb-font-bold rb-mb-6 rb-gradient-text">
                Ready to Transform Your Future?
              </motion.h2>
              <motion.p className="rb-text-xl rb-text-gray-400 rb-mb-8">
                Join the revolution in learning. Start your journey today and unlock unlimited potential.
              </motion.p>
              {!user && (
                <motion.div className="rb-flex rb-flex-col sm:rb-flex-row rb-gap-4 rb-justify-center">
                  <Magnetic strength={0.2}>
                    <Button size="lg" asChild>
                      <Link to="/register" className="rb-flex rb-items-center rb-gap-2">
                        Start Free Trial
                        <Sparkles size={20} />
                      </Link>
                    </Button>
                  </Magnetic>
                  <Magnetic strength={0.1}>
                    <Button variant="secondary" size="lg" asChild>
                      <Link to="/courses">Browse Courses</Link>
                    </Button>
                  </Magnetic>
                </motion.div>
              )}
            </Card>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}

export default Home
