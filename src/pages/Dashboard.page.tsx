import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Dashboard: React.FC<Props>=(props) =>{
    return(
        <div>
          This is a Dashboard page.
          <Link to="Recordings"><span 
          className="text-blue-500">Go to Recordings</span></Link>
        </div>

    );
};

Dashboard.defaultProps ={};

export default memo (Dashboard);
