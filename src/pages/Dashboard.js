"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Dashboard = () => {
  const { user } = useAuth()
  const [selectedPeriod, setSelectedPeriod] = useState("week")
  const [animatedStats, setAnimatedStats] = useState({
    xp: 0,
    courses: 0,
    streak: 0,
    rank: 0,
  })

  useEffect(() => {
    // Animate numbers on load
    const timer = setTimeout(() => {
      setAnimatedStats({
        xp: user?.xp || 2450,
        courses: 12,
        streak: user?.streak || 7,
        rank: 42,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [user])

  const recentCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      progress: 75,
      thumbnail: "https://via.placeholder.com/150x100",
      lastAccessed: "2 hours ago",
      difficulty: "Advanced",
      timeLeft: "3h 20m",
    },
    {
      id: 2,
      title: "Node.js Microservices",
      progress: 45,
      thumbnail: "https://via.placeholder.com/150x100",
      lastAccessed: "1 day ago",
      difficulty: "Intermediate",
      timeLeft: "8h 15m",
    },
    {
      id: 3,
      title: "UI/UX Design Systems",
      progress: 90,
      thumbnail: "https://via.placeholder.com/150x100",
      lastAccessed: "3 days ago",
      difficulty: "Beginner",
      timeLeft: "1h 30m",
    },
  ]

  const achievements = [
    { icon: "🏆", title: "Course Master", description: "Completed 10 courses", rarity: "Epic" },
    { icon: "🔥", title: "Streak Legend", description: "30-day learning streak", rarity: "Legendary" },
    { icon: "⭐", title: "Perfect Score", description: "100% on 5 quizzes", rarity: "Rare" },
    { icon: "🎯", title: "Skill Collector", description: "Mastered 15 skills", rarity: "Common" },
  ]

  const upcomingEvents = [
    {
      title: "React Masterclass Live",
      date: "Tomorrow, 3:00 PM",
      type: "webinar",
      attendees: 1250,
    },
    {
      title: "AI Hackathon 2024",
      date: "Dec 25, 2024",
      type: "hackathon",
      prize: "$10,000",
    },
    {
      title: "1-on-1 with Sarah Chen",
      date: "Dec 28, 2024",
      type: "mentoring",
      duration: "45 min",
    },
  ]

  const learningStats = {
    week: { hours: 12, courses: 2, quizzes: 8, xp: 450 },
    month: { hours: 48, courses: 6, quizzes: 24, xp: 1200 },
    year: { hours: 156, courses: 18, quizzes: 89, xp: 4500 },
  }

  const currentStats = learningStats[selectedPeriod]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-8 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome back, <span className="gradient-text-blue">{user?.name}</span>! 👋
          </h1>
          <p className="text-xl text-gray-400">Ready to continue your learning journey?</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="card hover-lift animate-fadeInUp">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Current Level</p>
                <p className="text-3xl font-bold gradient-text-blue">{user?.level}</p>
              </div>
              <div className="text-4xl">🎯</div>
            </div>
            <div className="progress-bar mb-2">
              <div className="progress-fill" style={{ width: `${(animatedStats.xp % 200) / 2}%` }}></div>
            </div>
            <p className="text-xs text-gray-400">{animatedStats.xp % 200}/200 XP to next level</p>
          </div>

          <div className="card hover-lift animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Learning Streak</p>
                <p className="text-3xl font-bold gradient-text-purple">{animatedStats.streak} days</p>
              </div>
              <div className="text-4xl animate-bounce">🔥</div>
            </div>
          </div>

          <div className="card hover-lift animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Total XP</p>
                <p className="text-3xl font-bold text-yellow-400">{animatedStats.xp.toLocaleString()}</p>
              </div>
              <div className="text-4xl">⭐</div>
            </div>
          </div>

          <div className="card hover-lift animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Global Rank</p>
                <p className="text-3xl font-bold text-green-400">#{animatedStats.rank}</p>
              </div>
              <div className="text-4xl">🏆</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <div className="card animate-fadeInUp">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Continue Learning</h2>
                <Link to="/courses" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View All →
                </Link>
              </div>

              <div className="space-y-6">
                {recentCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-6">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-20 h-14 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-white text-lg">{course.title}</h3>
                          <span
                            className={`badge ${
                              course.difficulty === "Advanced"
                                ? "badge-error"
                                : course.difficulty === "Intermediate"
                                  ? "badge-warning"
                                  : "badge-success"
                            }`}
                          >
                            {course.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">
                          Last accessed {course.lastAccessed} • {course.timeLeft} remaining
                        </p>
                        <div className="progress-bar mb-2">
                          <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-400">{course.progress}% complete</p>
                          <Link to={`/courses/${course.id}`} className="btn-primary text-sm px-4 py-2">
                            Continue
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Statistics */}
            <div className="card animate-fadeInUp">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Learning Analytics</h2>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="input text-sm w-auto"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 glass rounded-xl hover-glow">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{currentStats.hours}</div>
                  <div className="text-sm text-gray-400">Hours Learned</div>
                </div>
                <div className="text-center p-6 glass rounded-xl hover-glow">
                  <div className="text-3xl font-bold text-green-400 mb-2">{currentStats.courses}</div>
                  <div className="text-sm text-gray-400">Courses Completed</div>
                </div>
                <div className="text-center p-6 glass rounded-xl hover-glow">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{currentStats.quizzes}</div>
                  <div className="text-sm text-gray-400">Quizzes Taken</div>
                </div>
                <div className="text-center p-6 glass rounded-xl hover-glow">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{currentStats.xp}</div>
                  <div className="text-sm text-gray-400">XP Earned</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Achievements */}
            <div className="card animate-fadeInUp">
              <h2 className="text-xl font-bold text-white mb-6">Recent Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-white text-sm">{achievement.title}</h3>
                          <span
                            className={`badge text-xs ${
                              achievement.rarity === "Legendary"
                                ? "badge-error"
                                : achievement.rarity === "Epic"
                                  ? "badge-warning"
                                  : achievement.rarity === "Rare"
                                    ? "badge-success"
                                    : "badge"
                            }`}
                          >
                            {achievement.rarity}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/skills" className="block text-center mt-6 text-blue-400 hover:text-blue-300 transition-colors">
                View All Achievements →
              </Link>
            </div>

            {/* Upcoming Events */}
            <div className="card animate-fadeInUp">
              <h2 className="text-xl font-bold text-white mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <h3 className="font-semibold text-white text-sm mb-2">{event.title}</h3>
                    <p className="text-xs text-gray-400 mb-3">{event.date}</p>
                    <div className="flex items-center justify-between">
                      <span
                        className={`badge text-xs ${
                          event.type === "webinar"
                            ? "badge"
                            : event.type === "hackathon"
                              ? "badge-error"
                              : "badge-success"
                        }`}
                      >
                        {event.type}
                      </span>
                      <span className="text-xs text-gray-400">
                        {event.attendees && `${event.attendees} attending`}
                        {event.prize && `Prize: ${event.prize}`}
                        {event.duration && event.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card animate-fadeInUp">
              <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/ai-assistant"
                  className="block w-full text-left p-4 glass rounded-lg hover:bg-blue-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🤖</span>
                    <span className="text-white font-medium">Ask AI Assistant</span>
                  </div>
                </Link>
                <Link
                  to="/resume"
                  className="block w-full text-left p-4 glass rounded-lg hover:bg-green-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📄</span>
                    <span className="text-white font-medium">Build Resume</span>
                  </div>
                </Link>
                <Link
                  to="/mentors"
                  className="block w-full text-left p-4 glass rounded-lg hover:bg-purple-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">👥</span>
                    <span className="text-white font-medium">Find Mentor</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
