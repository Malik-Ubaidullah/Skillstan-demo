import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import SkillInventory from "./pages/SkillInventory"
import ResumeBuilder from "./pages/ResumeBuilder"
import Portfolio from "./pages/Portfolio"
import Community from "./pages/Community"
import Mentors from "./pages/Mentors"
import Hackathons from "./pages/Hackathons"
import AIAssistant from "./pages/AIAssistant"
import Profile from "./pages/Profile"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminDashboard from "./pages/admin/AdminDashboard"

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div
            className="rb-min-h-screen"
            style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}
          >
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/skills" element={<SkillInventory />} />
                <Route path="/resume" element={<ResumeBuilder />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/community" element={<Community />} />
                <Route path="/mentors" element={<Mentors />} />
                <Route path="/hackathons" element={<Hackathons />} />
                <Route path="/ai-assistant" element={<AIAssistant />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
