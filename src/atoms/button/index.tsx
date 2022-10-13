import React, { DetailedHTMLProps, ReactNode } from "react";

type propType = {
  children: ReactNode;
  customClasses?: string;
  outline?: Boolean;
} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Button = ({ children, customClasses, outline, ...props }: propType) => {
  return (
    <button
      className={`h-[3.125rem] w-full flex items-center justify-center ${
        outline && "border"
      } ${customClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
