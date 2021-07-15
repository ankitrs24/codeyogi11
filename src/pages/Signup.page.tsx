import { FC, memo } from "react";

interface Props{}

const Signup: FC<Props>=(props) =>{
    return(
        <div>
          This is a Signup page.
        </div>

    );
};

Signup.defaultProps={};

export default memo (Signup);