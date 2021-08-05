import { FC, memo } from "react";
import {useState} from "react";
import { HiOutlineX } from "react-icons/hi";

interface Props {
    theme?: 'primary' |'Success' ;
    children: string;
    className: string;
    }

const Alert: FC<Props> = ({theme,children,className}) => {
 
 const [hide ,setHide] =useState(false);
 const themeColor=
  theme==="primary" 
  ? "bg-blue-300 text-blue-500" 
  : "bg-green-300 textgreen-500";

  return (
  <>
    {hide && <div className={"border-0 mb-4 h-10 p-2 px-5 shadow-md" + className +" " + themeColor} role="alert">
    <strong>{theme !} </strong> {children}
    <span className="float-right" onClick={() => setHide((open) => !open)}><HiOutlineX /></span>
</div> }
{!hide && <button children ="show" onClick={()=> setHide((open) =>!open)}/>}
  </>
  )
};

Alert.defaultProps = {
  theme:"primary",
};

export default memo(Alert);
