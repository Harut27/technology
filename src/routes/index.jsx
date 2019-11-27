import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";

import GuestLayout from "./guest-layout";
import Home from "../components/pages/home";
import News from "../components/pages/news"
import HowTo from "../components/pages/howto"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <GuestLayout exact path="/" component={Home} />
        <GuestLayout exact path="/news" component={News} />
        <GuestLayout exact path="/howto" component={HowTo} />

        
      </Switch>
    </Router>
  );
};

export default Routes;
