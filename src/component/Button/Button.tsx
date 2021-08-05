import { FC, memo } from "react";
import { ButtonHTMLAttributes } from "react";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary"|"Secondary"| "Success"| "Dark";
  children: string;
  type?: "button" | "reset" | "submit";
  className: string;
}

const Button: FC<Props> = ({ children, className, theme, ...rest }) => {
  const themeClasses = theme === "primary" ? "bg-blue-600" : theme==="Secondary" ? "bg-gray-600": theme==="Dark" ? "bg-red-500" :theme==="Success" ? "bg-green-500" : "bg-indigo-100";
  
  return (
    <button
      {...rest}
      className={
        "flex justify-centre h-12 w-24 p-2 mt-2 text-center items-center text-white shadow-md hover: opacity-60  border-2 rounded " +
        themeClasses +
        " " +
        className
      }
    >
      {children}
    </button>
    
  );
};

Button.defaultProps = {
  theme: "primary",
  
};
export default memo(Button);
