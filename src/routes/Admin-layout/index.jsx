import React, { Component } from "react";
import { Route } from "react-router";
import SitebarForAdmin from "../../components/pages/admin-page/admin-sitebar";



class AdminLayout extends Component {
  render() {
    const { component: ChildComponent, ...rest } = this.props;

    return (
      <>
        <SitebarForAdmin />
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

export default AdminLayout;