import { forwardRef } from "react"

export const Input = forwardRef(({ className = "", type = "text", ...props }, ref) => {
  return <input ref={ref} type={type} className={`rb-input ${className}`} {...props} />
})

Input.displayName = "Input"
