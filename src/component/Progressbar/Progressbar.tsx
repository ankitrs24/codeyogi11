import { FC, memo } from "react";
import { main } from "../Alert/Alert.stories";

interface Props {
  theme: "primary" | "Warning" | "Info" | "Success" | "error";
  progress: number;
  showValue: boolean;
}

const Progressbar: FC<Props> = ({ theme, progress, showValue }) => {
  const themeClasses =
    theme === "primary"
      ? "bg-blue-500"
      : theme === "Warning"
      ? "bg-gray-500"
      : theme === "Info"
      ? "bg-yellow-500"
      : theme === "Success"
      ? "bg-green-500"
      : "bg-pink-500";
  let width = progress;
  console.log(theme, themeClasses, width, progress);
  if (progress > 100) {
    progress = 100;
    console.error(`progress can't be more than 100 but ${progress} given`);
  }
  if (progress < 0) {
    progress = 0;
    console.error(`progress can't be less than 0 but ${progress} given`);
  }
  return (
    <div className={" w-full border-2 p-2 mt-2 rounded-full "}>
      <div style={{ width: progress + "%" }} className={" h-4 " + themeClasses}>
        {showValue && (
          <span className="block w-full text-sm text-center">
            {progress + "%"}
          </span>
        )}
      </div>
    </div>
  );
};

Progressbar.defaultProps = {
  theme: "primary",
};
export default memo(Progressbar);
