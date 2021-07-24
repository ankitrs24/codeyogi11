import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";
import NotFound from "./pages/NotFound.page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Login"></Redirect>
        </Route>
        <Route path={["/Login", "/Signup"]} exact>
          <AuthPage />
        </Route>
        <Route path={["/Dashboard", "/Recordings", "/batch/:batchNumber/Lecture/:LectureNumber"]} exact>
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
