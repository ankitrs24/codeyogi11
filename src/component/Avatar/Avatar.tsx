import {FC, memo, useState} from "react";
import profile from "./profile-12.jpeg";

interface Props {
  src: string;
  status: "online" | "Offline" | "undefined";
  size: "sm" | "lg" | "md" | "xl";
  className: string;
}

const Avatar: FC<Props>=({src,status,size,className}) =>{
    const[Activity, setActivity] =useState(undefined);
        return(
        
        <div className="relative flex">
            <div>
            <img src={profile}
             className={ className + "rounded-full flex-shrink-0 w-10 h-10 inline-block"}
             />
        </div>
        {Activity && (
          <div
            className={
              (Activity === "online" ? "bg-green-600 " : "bg-gray-400 ") +
              " absolute w-2 h-2 rounded-full bottom-1  box-content border-white "
            }
          >
          </div>
        )}
      </div>
    )
}

export default memo(Avatar);