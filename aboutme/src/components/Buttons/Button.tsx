import React from "react";

interface Props {
  border: string;
  bgcolor:string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
  customClassName: string;
}

const Button: React.FC<Props> = ({ 
    border,
    bgcolor,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    customClassName
  }) => { 
  return (
    <button 
    className={customClassName}
      onClick={onClick}
      style={{
         backgroundColor: bgcolor,
         color:color,
         border,
         borderRadius: radius,
         height,
         width,
      }}
    >
    {children} 
    </button>
  );
}

export default Button;