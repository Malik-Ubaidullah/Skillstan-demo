"use client"

import { motion } from "framer-motion"
import { HoverLift } from "./motion"

export const Card = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  glow = false,
  spotlight = false,
  ...props
}) => {
  const baseClasses = "rb-card"
  const variantClasses = {
    default: "",
    glass: "rb-glass",
    glassStrong: "rb-glass-strong",
  }

  const classes = [baseClasses, variantClasses[variant], glow && "rb-card-glow", spotlight && "rb-spotlight", className]
    .filter(Boolean)
    .join(" ")

  const CardComponent = hover ? HoverLift : motion.div

  return (
    <CardComponent className={classes} {...props}>
      {children}
    </CardComponent>
  )
}

export const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={`rb-mb-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export const CardFooter = ({ children, className = "", ...props }) => {
  return (
    <div className={`rb-mt-6 ${className}`} {...props}>
      {children}
    </div>
  )
}
