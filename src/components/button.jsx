const Button = ({ className = "", size = "default", children, ...props }) => {
  const baseClasses =
    "relative  rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/85 shadow-lg shadow-primary/16";

  const sizeClasses = {
    sm: "px-2 py-1.5 text-sm",
    default: "px-4 py-1.5 text-base",
    lg: "px-6 py-2 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
