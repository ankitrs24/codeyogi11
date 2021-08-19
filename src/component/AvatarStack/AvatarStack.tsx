import { FC, memo } from "react";
import Avatar from "../Avatar/Avatar";

interface Props {
  srcArray: string[];
  threshold: number;
}

const AvatarStack: FC<Props> = ({ srcArray, threshold }) => {
  let n = 0;
  n = srcArray.length - threshold;
  const statusArray : ("online" | "Offline" | "undefined")[] = [
    "online",
    "Offline",
    "undefined",
    "Offline"
     ];

  return (
    <div className="flex flex-row mt-8 -space-x-4 ">
      {srcArray
        .slice(0, srcArray.length > threshold ? threshold : srcArray.length)
        .map((imagesrc, index) => {
          return (
            <Avatar
              className="duration-500 transform hover:-translate-y-3"
              src={imagesrc}
              status={statusArray[index]}
            ></Avatar>
          );
        })}
      {/* {users >= 1 && (
        <Avatar
          className="duration-500 transform hover:-translate-y-3"
          src={srcArray[0]}
        ></Avatar>
      )}
      {users >= 2 && (
        <Avatar
          className="duration-500 transform hover:-translate-y-3"
          src={srcArray[1]}
        ></Avatar>
      )}
      {users >= 3 && (
        <Avatar
          className="duration-500 transform hover:-translate-y-3"
          src={srcArray[2]}
        ></Avatar>
      )}
      {users >= 4 && (
        <Avatar
          className="duration-500 transform hover:-translate-y-3"
          src={srcArray[3]}
        ></Avatar>
      )} */}
      {n > 0 && (
        <div className="relative px-3 my-5 mr-2 text-blue-600 duration-500 transform bg-white border rounded-full shadow-2xl h-7 w-max hover:-translate-y-3"> { "+" + n + "more" }</div>
      )}
    </div>
  );
};

AvatarStack.defaultProps = {
  threshold: 4,
};

export default memo(AvatarStack);
