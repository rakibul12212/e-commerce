const Button = ({
  variant = "primary",
  text = "",
  Icon,
  onClick,
  className = "",
  ariaLabel = "", 
}) => {
  const baseStyles = "px-2 py-2 rounded text-xs font-medium";
  const variants = {
    primary:
      "bg-white border border-black px-4 py-1 rounded text-black hover:bg-black hover:text-white transition ease-in-out",
    secondary:
      "bg-gray-700 border border-gray-700 px-4 py-1 rounded text-white hover:bg-black hover:text-white hover:border-gray-500 transition ease-in-out",
    iconButton:
      "bg-gray-700 border border-gray-700 p-2 rounded text-white hover:bg-black hover:text-white hover:border-gray-500 transition ease-in-out",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={ariaLabel || text || "icon button"}
    >
      <div className="flex items-center justify-center space-x-1">
        {Icon && <Icon className="w-4 h-4" />}
        {text && <span>{text}</span>}
      </div>
    </button>
  );
};

export default Button;
