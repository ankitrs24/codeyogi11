import { FC, memo } from "react";
import profile from "./profile-12.jpeg";

interface Props {
  src: string;
  status?: "online" | "Offline" | "undefined";
  size?: "sm" | "lg" | "md" | "xl";
  className: string;
}

const Avatar: FC<Props> = ({ src, status, size, className }) => {
  const onlineActivity =
    status === "online"
      ? "bg-green-600 "
      : status === "Offline"
      ? "bg-gray-400 "
      : "bg-white";
  return (
    <div className="relative">
      <div>
        <img
          src={profile}
          alt=""
          className={
            className + "rounded-full flex-shrink-0 w-16 h-16 inline-block"
          }
        />
      </div>
      {
        <div
          className={
            " absolute w-2 h-2 rounded-full bottom-1 border-white " +
            { onlineActivity }
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
