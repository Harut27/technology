import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";

import GuestLayout from "./guest-layout";
import Home from "../components/pages/home";
import News from "../components/pages/news";
import HowTo from "../components/pages/howto";
import Phones from "../components/pages/phones";
import Laptops from "../components/pages/laptops";
import Tvs from "../components/pages/tvs";
import Photographyes from "../components/pages/photography";
import Howto from "../components/pages/howto";
import PostPage from "../components/pages/post-page"




const Routes = () => {
  return (
    <Router>
      <Switch>
        <GuestLayout exact path="/" component={Home} />;
        <GuestLayout exact path="/news" component={News} />;
        <GuestLayout exact path="/howto" component={HowTo} />;
        <GuestLayout exact path="/phones" component={Phones} />;
        <GuestLayout exact path="/laptops" component={Laptops} />;
        <GuestLayout exact path="/tvs" component={Tvs} />;
        <GuestLayout exact path="/photography" component={Photographyes} />;
        <GuestLayout exact path="/howto" component={Howto} />;
        <GuestLayout exact path="/posts" component={PostPage} />;
        <GuestLayout exact path="/posts/:id/info" component={PostPage} />;


        
      </Switch>
    </Router>
  );
};

export default Routes;
