type InputProps = {
  placeholder: string;
  className?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function Input({ className, placeholder, onChange, value }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`cursor-pointer rounded-full border-2 border-gray-600 px-8 py-3 font-bold ${className}`}
      onChange={onChange}
      value={value || ""}
    />
  );
}

export default Input;
