import { useState } from "react";
import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGroups, Group } from "../api";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [groups, setGroups] = useState<Group[]>();
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((groups) =>
      setGroups(groups)
    );
  }, [query]);

  return (
    <div>
      This is a Dashboard page.
      <Link to="/Recordings">
        <span className="text-blue-500">Go to Recordings</span>
      </Link>
      <div className="w-48 border-black">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        {groups &&
          groups
            .filter((group) => group.name.includes(search))
            .map((group) => {
              return (
                <div className="p-4 bg-gray-400 border-4 rounded-lg ">
                  <ul className="uppercase">{group.name}</ul>
                  <ul> {group.id} </ul>
                  <ul> {group.description} </ul>
                  <ul> {group.profile_pic_url}</ul>
                </div>
              );
            })}
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
