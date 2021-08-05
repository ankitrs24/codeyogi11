import { FC, memo } from "react";
import { RiHome4Fill } from "react-icons/ri";
import { FaAppStore } from "react-icons/fa";
import { GrCube, GrSystem } from "react-icons/gr";
import { ImPower } from "react-icons/im";
import { FiDivide } from "react-icons/fi";

interface Props {}

const Sidebar: FC<Props> = (props) => {
  return (
    <div className="h-screen bg-gray-400 w-60">
      <ul>
        <div className="flex p-2 mt-4 border-2 border-gray-100 rounded-lg hover:bg-indigo-300">
          <RiHome4Fill className="ml-3"> </RiHome4Fill>
          <li>Dashboard</li>
        </div>
        <div className="flex p-2 mt-4 border-2 border-gray-100 rounded-lg hover:bg-indigo-300">
          <FaAppStore className="ml-3"> </FaAppStore>
          <li>Apps</li>
        </div>
        <div className="flex p-2 mt-4 border-2 border-gray-100 rounded-lg hover:bg-indigo-300">
          <GrCube className="ml-3"> </GrCube>
          <li>Component</li>
        </div>
        <div className="flex p-2 mt-4 border-2 border-gray-100 rounded-lg hover:bg-indigo-300">
          <ImPower className="ml-3"> </ImPower>
          <li>Element</li>
        </div>
        <div className="flex p-2 mt-4 border-2 border-gray-100 rounded-lg hover:bg-indigo-300">
          <GrSystem className="ml-3"> </GrSystem>
          <li>Widget</li>
        </div>
      </ul>
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
