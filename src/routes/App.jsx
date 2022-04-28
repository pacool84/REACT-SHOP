import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/global.css";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
