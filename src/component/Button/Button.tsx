import { FC, memo } from "react";
import { ButtonHTMLAttributes } from "react";
import { HiLockClosed } from "react-icons/hi";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "Secondary" | "Success" | "Dark";
  children: string;
  className: string;
}

const Button: FC<Props> = ({ children, className, theme, ...rest }) => {
  const themeClasses =
    theme === "primary"
      ? "bg-indigo-500  text-blue-700"
      : theme === "Secondary"
      ? "bg-red-200 text-red-500"
      : theme === "Dark"
      ? "bg-gray-300 text-gray-500"
      : "bg-blue-100";

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
