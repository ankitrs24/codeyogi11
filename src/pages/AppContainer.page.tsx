import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";
import LecturePage from "./Lecture.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between ">
      <Sidebar></Sidebar>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage></DashboardPage>
        </Route>
        <Route path="/recordings">
          <RecordingsPage></RecordingsPage>
        </Route>
        <Route path="/batch/:batchNumber/Lecture/:LectureNumber">
          <LecturePage />
        </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
