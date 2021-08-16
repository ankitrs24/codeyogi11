import { FC, memo } from "react";

interface Props {
  theme: "primary" | "Warning" | "Info" | "Success" | "error";
  progress: number;
}

const Progressbar: FC<Props> = (theme, progress) => {
  const themeClasses =
    theme === "primary"
      ? "bg-blue-500"
      : theme === "Warning"
      ? "bg-green-500"
      : theme === "Info"
      ? "bg-indigo-500"
      : theme === "Success"
      ? "bg-gray-500"
      : "bg-red-500";
  let width = progress;
  if (progress > 100) {
    width = 100;
    console.error(`progress can't be more than 100 but ${progress} given`);
  }
  if (progress < 0) {
    width = 0;
    console.error(`progress can't be less than 0 but ${progress} given`);
  }
  return (
    <div>
      className=
      {" w-full p-2 mt-2 rounded-2xl " + themeClasses + " "}
    </div>
  );
};

Progressbar.defaultProps = {
  theme: "primary",
};
export default memo(Progressbar);
