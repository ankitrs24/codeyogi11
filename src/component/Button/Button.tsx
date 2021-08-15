import { FC, memo } from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "Secondary" | "Success" | "Dark";
  children: string;
  className: string;
}

const Button: FC<Props> = ({ children, className, theme, ...rest }) => {
  const themeClasses =
    theme === "primary"
      ? "bg-indigo-600  text-white"
      : theme === "Secondary"
      ? "bg-red-500 text-white"
      : theme === "Dark"
      ? "bg-gray-500 text-white"
      : "bg-blue-100 text-white";

  return (
    <button
      {...rest}
      className={
        "flex justify-center h-12 w-24 p-2 mt-2 text-center items-center shadow-md hover: opacity-60  border-2 rounded " +
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
