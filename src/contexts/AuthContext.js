"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate checking for existing auth token
    const token = localStorage.getItem("authToken")
    if (token) {
      // In a real app, you'd validate the token with your backend
      setUser({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "student",
        avatar: "https://via.placeholder.com/40x40",
        xp: 2450,
        level: 12,
        streak: 7,
      })
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Simulate API call
    setLoading(true)
    try {
      // Mock successful login
      const userData = {
        id: 1,
        name: "John Doe",
        email: email,
        role: "student",
        avatar: "https://via.placeholder.com/40x40",
        xp: 2450,
        level: 12,
        streak: 7,
      }
      setUser(userData)
      localStorage.setItem("authToken", "mock-token")
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData) => {
    setLoading(true)
    try {
      // Mock successful registration
      const newUser = {
        id: Date.now(),
        ...userData,
        role: "student",
        avatar: "https://via.placeholder.com/40x40",
        xp: 0,
        level: 1,
        streak: 0,
      }
      setUser(newUser)
      localStorage.setItem("authToken", "mock-token")
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("authToken")
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
