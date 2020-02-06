import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";

import GuestLayout from "./guest-layout";
import AdminLayout from "./Admin-layout";
import Home from "../components/pages/home";
import News from "../components/pages/news";
import HowTo from "../components/pages/howto";
import Phones from "../components/pages/phones";
import Laptops from "../components/pages/laptops";
import Tvs from "../components/pages/tvs";
import Photographyes from "../components/pages/photography";
import Howto from "../components/pages/howto";
import PostPage from "../components/pages/post-page"
import Contact from "../components/pages/contact"
import AdminPage from "../components/pages/admin-page"





const Routes = () => {
  return (
    <Router>
      <Switch>
        
        <GuestLayout exact path="/" component={Home} />;
        <GuestLayout exact path="/news" component={News} />;
        <GuestLayout exact path="/contactus" component={Contact} />;
        <GuestLayout exact path="/howto" component={HowTo} />;
        <GuestLayout exact path="/phones" component={Phones} />;
        <GuestLayout exact path="/laptops" component={Laptops} />;
        <GuestLayout exact path="/tvs" component={Tvs} />;
        <GuestLayout exact path="/photography" component={Photographyes} />;
        <GuestLayout exact path="/posts" component={PostPage} />;
        <GuestLayout exact path="/posts/:id/info" component={PostPage} />;


        <AdminLayout exact path="/admin" component={Home} />;
        <AdminLayout exact path="/admin/news" component={News} />;
        <AdminLayout exact path="/admin/contactus" component={Contact} />;
        <AdminLayout exact path="/admin/howto" component={HowTo} />;
        <AdminLayout exact path="/admin/phones" component={Phones} />;
        <AdminLayout exact path="/admin/laptops" component={Laptops} />;
        <AdminLayout exact path="/admin/tvs" component={Tvs} />;
        <AdminLayout exact path="/admin/photography" component={Photographyes} />;
        <AdminLayout exact path="/admin/posts" component={PostPage} />;
        <AdminLayout exact path="/admin/posts/:id/info" component={PostPage} />;

      </Switch>
    </Router>
  );
};

export default Routes;
