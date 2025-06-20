"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("popular")

  const categories = [
    { id: "all", name: "All Courses", count: 156, icon: "📚" },
    { id: "web-development", name: "Web Development", count: 45, icon: "🌐" },
    { id: "mobile-development", name: "Mobile Development", count: 28, icon: "📱" },
    { id: "data-science", name: "Data Science", count: 32, icon: "📊" },
    { id: "ai-ml", name: "AI & Machine Learning", count: 24, icon: "🤖" },
    { id: "design", name: "UI/UX Design", count: 18, icon: "🎨" },
    { id: "devops", name: "DevOps", count: 9, icon: "⚙️" },
  ]

  const courses = [
    {
      id: 1,
      title: "Complete React Developer Course",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12543,
      duration: "42 hours",
      level: "Intermediate",
      price: "Free",
      thumbnail: "https://via.placeholder.com/300x200",
      category: "web-development",
      description: "Master React from basics to advanced concepts with hands-on projects.",
      tags: ["React", "JavaScript", "Frontend"],
      isPopular: true,
      isTrending: false,
      isNew: false,
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Dr. Michael Chen",
      rating: 4.9,
      students: 8765,
      duration: "38 hours",
      level: "Beginner",
      price: "$49",
      thumbnail: "https://via.placeholder.com/300x200",
      category: "data-science",
      description: "Learn Python programming specifically for data analysis and visualization.",
      tags: ["Python", "Data Analysis", "Pandas"],
      isPopular: true,
      isTrending: true,
      isNew: false,
    },
    {
      id: 3,
      title: "Mobile App Development with Flutter",
      instructor: "Alex Rodriguez",
      rating: 4.7,
      students: 5432,
      duration: "35 hours",
      level: "Intermediate",
      price: "$79",
      thumbnail: "https://via.placeholder.com/300x200",
      category: "mobile-development",
      description: "Build beautiful cross-platform mobile apps with Flutter and Dart.",
      tags: ["Flutter", "Dart", "Mobile"],
      isPopular: false,
      isTrending: false,
      isNew: true,
    },
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Emily Watson",
      rating: 4.8,
      students: 9876,
      duration: "45 hours",
      level: "Advanced",
      price: "$99",
      thumbnail: "https://via.placeholder.com/300x200",
      category: "ai-ml",
      description: "Comprehensive introduction to machine learning algorithms and applications.",
      tags: ["Machine Learning", "Python", "AI"],
      isPopular: true,
      isTrending: true,
      isNew: false,
    },
    {
      id: 5,
      title: "UI/UX Design Masterclass",
      instructor: "Jessica Park",
      rating: 4.6,
      students: 6543,
      duration: "28 hours",
      level: "Beginner",
      price: "Free",
      thumbnail: "https://via.placeholder.com/300x200",
      category: "design",
      description: "Learn design principles and create stunning user interfaces.",
      tags: ["UI Design", "UX Design", "Figma"],
      isPopular: false,
      isTrending: false,
      isNew: true,
    },
    {
      id: 6,
      title: "Node.js Backend Development",
      instructor: "David Kim",
      rating: 4.7,
      students: 7890,
      duration: "40 hours",
      level: "Intermediate",
      price: "$59",
      thumbnail: "https://via.placeholder.com/300x200",
      category: "web-development",
      description: "Build scalable backend applications with Node.js and Express.",
      tags: ["Node.js", "Express", "Backend"],
      isPopular: false,
      isTrending: true,
      isNew: false,
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.students - a.students
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      case "price-low":
        const priceA = a.price === "Free" ? 0 : Number.parseInt(a.price.replace("$", ""))
        const priceB = b.price === "Free" ? 0 : Number.parseInt(b.price.replace("$", ""))
        return priceA - priceB
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-8 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-blue">Explore Courses</h1>
          <p className="text-xl text-gray-400">Discover courses that match your interests and career goals</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6 animate-fadeInUp">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-12"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</div>
            </div>

            {/* Sort */}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input w-auto min-w-[200px]">
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
            </select>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "glass text-gray-300 hover:bg-white/10"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 animate-fadeInUp">
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{sortedCourses.length}</span> of{" "}
            <span className="text-white font-semibold">{courses.length}</span> courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sortedCourses.map((course, index) => (
            <div
              key={course.id}
              className="card card-glow hover-lift animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className="relative mb-6 group">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-white text-4xl">▶️</div>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {course.isPopular && <span className="badge badge-warning text-xs">🔥 Popular</span>}
                  {course.isTrending && <span className="badge badge-success text-xs">📈 Trending</span>}
                  {course.isNew && <span className="badge badge text-xs">✨ New</span>}
                </div>

                {/* Price Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`badge text-xs font-bold ${course.price === "Free" ? "badge-success" : "badge"}`}>
                    {course.price}
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-400">by {course.instructor}</p>
                </div>

                <p className="text-sm text-gray-300 line-clamp-2">{course.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <span>⭐</span>
                      <span>{course.rating}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>👥</span>
                      <span>{course.students.toLocaleString()}</span>
                    </span>
                  </div>
                  <span className="flex items-center space-x-1">
                    <span>⏱️</span>
                    <span>{course.duration}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span
                    className={`badge text-xs ${
                      course.level === "Beginner"
                        ? "badge-success"
                        : course.level === "Intermediate"
                          ? "badge-warning"
                          : "badge-error"
                    }`}
                  >
                    {course.level}
                  </span>

                  <Link to={`/courses/${course.id}`} className="btn-primary text-sm px-6 py-2 hover-lift">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {sortedCourses.length > 0 && (
          <div className="text-center animate-fadeInUp">
            <button className="btn-secondary px-8 py-3 hover-lift">Load More Courses</button>
          </div>
        )}

        {/* No Results */}
        {sortedCourses.length === 0 && (
          <div className="text-center py-20 animate-fadeInUp">
            <div className="text-8xl mb-6 opacity-50">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No courses found</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Try adjusting your search criteria or explore different categories to find the perfect course for you.
            </p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="btn-primary px-6 py-3"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses
