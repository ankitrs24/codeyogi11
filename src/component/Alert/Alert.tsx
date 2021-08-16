import { FC, memo } from "react";
import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";

interface Props {
  theme?: "primary" | "Success" | "warning" | "error" | "Info";
  children: string;
  className: string;
}

const Alert: FC<Props> = ({ theme, children, className }) => {
  const [hide, setHide] = useState(false);
  const themeColor =
    theme === "primary"
      ? "bg-blue-200 text-blue-500"
      : theme === "Success"
      ? "bg-green-200 text-green-500"
      : theme === "warning"
      ? "bg-indigo-200 text-indigo-500"
      : theme === "error"
      ? "bg-red-200 text-red-500"
      : "bg-gray-200 text-gray-500";

  return (
    <>
      {hide && (
        <div
          className={
            "border-0 mb-4 h-10 p-2 px-5" + className + " " + themeColor
          }
        >
          <strong>{theme + "!"} </strong> {children}
          <span
            className="float-right"
            onClick={() => setHide((open) => !open)}
          >
            <HiOutlineX />
          </span>
        </div>
      )}
      {!hide && (
        <button
          className="p-4 text-center text-red-800 bg-red-200 border-0"
          children="Show"
          onClick={() => setHide((open) => !open)}
        />
      )}
    </>
  );
};

Alert.defaultProps = {
  theme: "primary",
};

export default memo(Alert);
