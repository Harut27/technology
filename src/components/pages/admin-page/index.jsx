import React, { Component } from "react";
import SitebarForAdmin from "./admin-sitebar";
import PhotographyForAdmin from "./Photography-admin"
import "./style.scss"




class AdminPage extends Component {

    render(){


        return(
            <div className="AdminPage">

                <SitebarForAdmin/>
                <PhotographyForAdmin/>

            </div>
        )
    }

}




export default AdminPage;