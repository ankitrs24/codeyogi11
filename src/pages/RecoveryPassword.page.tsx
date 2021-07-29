import {FC, memo} from "react";

interface Props{
}

const RecoveryPassword: FC<Props>=(props) =>{
    return(
        <div>
          Recovery Password here!
        </div>

    );

};

RecoveryPassword.defaultProps = {};

export default memo (RecoveryPassword);