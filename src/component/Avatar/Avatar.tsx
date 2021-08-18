import { FC, memo } from "react";
import profile from "./profile-12.jpeg";

interface Props {
  src: string;
  status?: "online" | "Offline" | "undefined";
  size?: "sm" | "lg" | "md" | "xl";
  className: string;
}

const Avatar: FC<Props> = ({ src, status, size, className }) => {
  return (
    <div className="relative inline-block">
      <img
        src={src}
        alt=""
        className={
          className + " rounded-full flex-shrink-0 w-16 h-16 inline-block"
        }
      />
      {
        <div
          className={
            " absolute w-4 h-4 rounded-full bottom-1 right-1 border-white " +
            (status === "online"
              ? " bg-green-600 "
              : status === "Offline"
              ? " bg-gray-400 "
              : " bg-white ")
          }
        ></div>
      }
    </div>
  );
};

Avatar.defaultProps = {
  status: "online",
};

export default memo(Avatar);
