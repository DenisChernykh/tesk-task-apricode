type ButtonProps = {
  type?: "button" | "submit";
  text: string;
  onClick?: () => void;
  className?: string;
};
function Button({ type = "button", text, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-teal-400 px-8 py-3 ${className}`}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
