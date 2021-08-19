import { useState } from "react";
import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetchGroups({ status: "all-groups", query });
  }, [query]);

  return (
    <div>
      This is a Dashboard page.
      <Link to="/Recordings">
        <span className="text-blue-500">Go to Recordings</span>
      </Link>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
