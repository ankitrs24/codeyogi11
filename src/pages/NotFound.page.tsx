import { FC, memo } from "react";

interface Props {}

const NotFound: FC<Props> = (props) => {
  return <div className="h-24 bg-green-500">The Page not found.</div>;
};

NotFound.defaultProps = {};

export default memo(NotFound);
