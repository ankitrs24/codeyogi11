import { FC, memo, useEffect } from "react";

interface Props {}

const AuthHero: FC<Props> = (props) => {
  console.log("AuthHero rendering");
  useEffect(() => {
    console.log("AuthHero Rendering for the first time");
  }, []);

  return <div className="w-1/2 h-screen text-white bg-black "></div>;
};

AuthHero.defaultProps = {};

export default memo(AuthHero);
