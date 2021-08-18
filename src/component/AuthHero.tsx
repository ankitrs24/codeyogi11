import { FC, memo, useEffect } from "react";
import logo from "./logo.webp";

interface Props {}

const AuthHero: FC<Props> = (props) => {
  console.log("AuthHero rendering");
  useEffect(() => {
    console.log("AuthHero Rendering for the first time");
  }, []);

  return (
    <div className="w-1/2 h-screen text-white bg-black lg:block-hidden">
      <div>
        <img className="px-16 py-24" src={logo} alt="" />
      </div>
    </div>
  );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);
