import { FC, memo } from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "Primary" | "Secondary" | "Success" | "Dark";
  children: string;
}

const Button: FC<Props> = ({ children, className, theme, ...rest }) => {
  const themeClasses =
    theme === "Primary"
      ? "bg-blue-600 text-white"
      : theme === "Secondary"
      ? "bg-green-200 text-green-500"
      : theme === "Dark"
      ? "bg-gray-200 text-gray-500"
      : "bg-red-200 text-red-500";

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
  theme: "Primary",
};
export default memo(Button);
