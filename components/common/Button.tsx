import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const variantStyle = {
    primary:
      "bg-emerald-500 rounded-full px-4 py-2 text-white hover:bg-emerald-800 transition ease-in-out 0.6s cursor-pointer",
    secondary:
      "bg-gray-50 rounded-full px-4 py-2 text-gray-950 border border-gray-200 hover:bg-gray-800 hover:text-white transition ease-in-out 0.6s cursor-pointer",
    tertiary:
      "rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-gray-600 transition ease-in-out 0.6s cursor-pointer",
    danger: "rounded-full bg-red-500 text-white px-4 py-2 text-sm hover:bg-gray-600 transition ease-in-out 0.6s cursor-pointer",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantStyle[variant]} ${className}`}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
