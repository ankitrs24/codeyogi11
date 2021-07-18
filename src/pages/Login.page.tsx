import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props{}

const Login: FC<Props>= (props) =>{
    return(

        <div>
          This is a Login Page. 
          Don't have an account.<Link to="/Signup"><span className="text-blue-500">Click here</span></Link>

          <Link to="/Dashboard"><span className="text-blue-500">Go to dashboard</span></Link>

        </div>

    );
};

Login.defaultProps ={};

export default memo(Login); 