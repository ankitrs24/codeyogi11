import { groupCollapsed } from "console";
import { useState } from "react";
import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGroups, Group } from "../api";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [groups, setGroups] = useState<Group[]>();
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((groups) =>
      setGroups(groups)
    );
  }, [query]);
  console.log(groups);
  return (
    <div>
      This is a Dashboard page.
      <Link to="/Recordings">
        <span className="text-blue-500">Go to Recordings</span>
      </Link>
      <div>
        {groups &&
          groups.map((group) => {
            return <div>{group.name + " " + group.id}</div>;
          })}
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
