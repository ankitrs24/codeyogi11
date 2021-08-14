import { FC, memo } from "react";

interface Props {}

const RecoveryPassword: FC<Props> = (props) => {
  return <div>This is RecoveryPassword page.</div>;
};

RecoveryPassword.defaultProps = {};

export default memo(RecoveryPassword);
