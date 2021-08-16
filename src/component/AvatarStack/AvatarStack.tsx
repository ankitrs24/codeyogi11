import { FC, memo } from "react";
import Avatar from "../Avatar/Avatar";

interface Props {
  userNumber: number;
  srcArray: string[];
}

const AvatarStack: FC<Props> = ({ userNumber, srcArray }) => {
  let n = 0;
  const users = userNumber;
  if (userNumber > 4) {
    n = userNumber - 4;
  }

  return (
    <div className="flex flex-row mt-8 -space-x-4 ">
      {users >= 1 && (
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
      )}
      {n !== 0 && (
        <div className="relative px-3 my-5 mr-2 text-blue-600 duration-500 transform bg-white border rounded-full shadow-2xl h-7 w-max hover:-translate-y-3"></div>
      )}
    </div>
  );
};

AvatarStack.defaultProps = {
  userNumber: 10,
  srcArray: [
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
  ],
};

export default memo(AvatarStack);
