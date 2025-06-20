"use client"

import { motion } from "framer-motion"
import { forwardRef } from "react"

export const Button = forwardRef(
  ({ children, className = "", variant = "primary", size = "default", disabled = false, ...props }, ref) => {
    const baseClasses = "rb-button"
    const variantClasses = {
      primary: "rb-button-primary",
      secondary: "rb-button-secondary",
      ghost: "rb-button-ghost",
    }

    const sizeClasses = {
      sm: "rb-px-4 rb-py-2 rb-text-sm",
      default: "rb-px-6 rb-py-3 rb-text-base",
      lg: "rb-px-8 rb-py-4 rb-text-lg",
    }

    const classes = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      disabled && "opacity-50 cursor-not-allowed",
      className,
    ]
      .filter(Boolean)
      .join(" ")

    return (
      <motion.button
        ref={ref}
        whileHover={!disabled ? { scale: 1.02 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className={classes}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    )
  },
)

Button.displayName = "Button"
