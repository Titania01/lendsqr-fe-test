import { InputHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { generateId } from "../../utils/generatedId";
import "./Input.scss";

type InputProps = {
  customClasses?: string;
  icon?: ReactNode;
  password?: string;
  color?: string;
  label?: string;
  type?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const Input = ({
  placeholder,
  customClasses,
  required = true,
  color,
  label,
  type,
  icon,
  ...props
}: InputProps) => {
  const id = generateId();
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <div className="input-style">
        <input
          placeholder={placeholder}
          required={required}
          id={id}
          type={type}
          className={`border-0 outline-none text-black font-normal bg-transparent  ${customClasses}`}
          {...props}
        />
        {icon && <>{icon}</>}
      </div>
    </div>
  );
};
export default Input;
