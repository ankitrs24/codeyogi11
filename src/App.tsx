import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LS_LOGIN_TOKEN } from "./api";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";
import NotFound from "./pages/NotFound.page";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/Dashboard"/> : <Redirect to="/Login"/>}
        </Route>
        <Route path={["/Login", "/Signup"]} exact>
          <AuthPage />
        </Route>
        <Route
          path={[
            "/Dashboard",
            "/Recordings",
            "/batch/:batchNumber/Lecture/:LectureNumber",
          ]}
          exact
        >
          <AppContainerPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
