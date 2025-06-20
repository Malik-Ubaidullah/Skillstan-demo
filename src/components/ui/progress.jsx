"use client"

import { motion } from "framer-motion"

export const Progress = ({ value = 0, className = "", animated = true, ...props }) => {
  return (
    <div className={`rb-progress ${className}`} {...props}>
      <motion.div
        className="rb-progress-fill"
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        transition={{
          duration: animated ? 0.8 : 0,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
    </div>
  )
}
