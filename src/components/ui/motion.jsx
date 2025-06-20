"use client"

import { motion } from "framer-motion"

// Stagger container for animating children
export const StaggerContainer = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Fade in up animation
export const FadeInUp = ({ children, className = "", delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Scale in animation
export const ScaleIn = ({ children, className = "", delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide in from left
export const SlideInLeft = ({ children, className = "", delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide in from right
export const SlideInRight = ({ children, className = "", delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Stagger item for use within StaggerContainer
export const StaggerItem = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Hover lift effect
export const HoverLift = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Magnetic effect
export const Magnetic = ({ children, className = "", strength = 0.3, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1 + strength * 0.1 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Float animation
export const Float = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Pulse animation
export const Pulse = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
