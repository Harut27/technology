import React, { Component } from "react";
import { Route } from "react-router";
import SitebarForAdmin from "../../components/pages/admin-page/admin-components/admin-sitebar";



class AdminLayout extends Component {
  render() {
    const { component: ChildComponent, ...rest } = this.props;

    return (
      <div className="AdminPage">
        <SitebarForAdmin />

        <div className="admin-content">
          <Route
            {...rest}
            render={matchProps => {
              return <ChildComponent {...matchProps} />;
            }}
          />
        </div>
      </div>
    );
  }
}

export default AdminLayout;