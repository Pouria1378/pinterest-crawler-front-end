import React, { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  name: string;
  type?: "text" | "password" | "email" | "number";
  defaultValue: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  defaultValue,
  onChange,
}) => {
  return (
    <div className="mb-1">
      {label && (
        <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Input;
