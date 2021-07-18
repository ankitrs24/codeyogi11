import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props{}

const Signup: FC<Props>=(props) =>{
    return(
        <div>
          This is a Signup page.
          Already have an account.<Link to ="/Login"> <span className="text-blue-500">Click here</span> </Link>
        </div>

    );
};

Signup.defaultProps={};

export default memo (Signup);