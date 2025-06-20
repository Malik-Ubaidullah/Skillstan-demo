"use client"

import { useParams } from "react-router-dom"

const CourseDetail = () => {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-8 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card animate-fadeInUp">
          <div className="text-center">
            <div className="text-6xl mb-6">🎓</div>
            <h1 className="text-4xl font-bold gradient-text-blue mb-4">Course Detail</h1>
            <p className="text-gray-400 mb-4">Course ID: {id}</p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              This page will contain detailed course information, video player, lessons, quizzes, and interactive
              learning materials with the same beautiful ReactBits-inspired design.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
