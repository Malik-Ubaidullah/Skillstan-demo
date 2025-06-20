export const Badge = ({ children, className = "", variant = "default", ...props }) => {
  const baseClasses = "rb-badge"
  const variantClasses = {
    default: "rb-badge-default",
    success: "rb-badge-success",
    warning: "rb-badge-warning",
    error: "rb-badge-error",
  }

  const classes = [baseClasses, variantClasses[variant], className].filter(Boolean).join(" ")

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
