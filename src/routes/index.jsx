import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";

import GuestLayout from "./guest-layout";
import Home from "../components/pages/home";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <GuestLayout exact path="/" component={Home} />
        <GuestLayout exact path="/home" component={Home} />
        
      </Switch>
    </Router>
  );
};

export default Routes;
