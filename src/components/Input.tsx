import { InputProps } from "@/types";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
    />
  );
};

export default Input;