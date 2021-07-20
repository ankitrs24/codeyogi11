import { FC, memo } from "react";
import { Link } from "react-router-dom";
import AuthHero from "../component/AuthHero";

interface Props {}

const Signup: FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        This is a Signup page. Already have an account.
        <Link to="/Login">
          {" "}
          <span className="text-blue-500">Click here</span>{" "}
        </Link>
      </div>
      <AuthHero></AuthHero>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
