import { memo } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Recordings: React.FC<Props> = (props) => {
  return (
    <div>
      This is a Recording page.
      <Link to="Dashboard">
        <span className="text-blue-500">Go to dashboard</span>
      </Link>
    </div>
  );
};

Recordings.defaultProps = {};

export default memo(Recordings);
