import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";
import AuthHero from "../component/AuthHero";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
import RecoveryPasswordPage from "./RecoveryPassword.page";

interface Props {}

const Auth: FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between ">
      <Switch>
        <Route path="/Login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/Signup">
          <SignupPage></SignupPage>
        </Route>
        <Route path="/RecoveryPassword">
          <RecoveryPasswordPage></RecoveryPasswordPage>
        </Route>
      </Switch>
      <AuthHero></AuthHero>
    </div>
  );
};

Auth.defaultProps = {};

export default memo(Auth);
