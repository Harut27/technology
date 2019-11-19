import React, { Component } from "react";
import { Route } from "react-router";
import Navbar from "../../components/navbar";
import Trend from "../../components/trend"

class GuestLayout extends Component {
  render() {
    const { component: ChildComponent, ...rest } = this.props;

    return (
      <>
        <Navbar/>
        <Trend/>
        <div className="content">

            <Route
              {...rest}
              render={matchProps => {
                return <ChildComponent {...matchProps} />;
              }}
            />

       </div>
      </>
    );
  }
}

export default GuestLayout;
