import React, { Component } from "react";
import { Route } from "react-router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer"

class GuestLayout extends Component {
  render() {
    const { component: ChildComponent, ...rest } = this.props;

    return (
      <>
        <Navbar />
        <div className="content">
          <Route
            {...rest}
            render={matchProps => {
              return <ChildComponent {...matchProps} />;
            }}
          />
        </div>
        <Footer/>
      </>
    );
  }
}

export default GuestLayout;
