import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import "./style.scss";
import phonesData from "../../../../data-from-backend/phones-data";
import laptopsData from "../../../../data-from-backend/laptops-data";
import HowtoData from "../../../../data-from-backend/howto-data";






const Sidebar = ()=>{
    return(
        <div className="sidebar">

            <div className="latest-news">
                <FontAwesomeIcon icon={faStarHalfAlt} className="news-icon"/> 
                <h2> 
                     <Link to="/news">FRESH NEWS</Link>
                </h2>
            </div>
            <div className="sidebar-news-link">
                <Link to={`/posts/${phonesData[5].id}/info`}>Samsung Galaxy S11 release date, price, news and leaks</Link>
            </div>
            <div className="sidebar-news-link">
                <Link to={`/posts/${laptopsData[16].id}/info`}>Best laptop for DJs 2019: the best laptops for music production</Link>
            </div>
            <div className="sidebar-news-link">
                <Link to={`/posts/${HowtoData[2].id}/info`}>Star Wars Jedi: Fallen Order: five tips to becoming the ultimate Jedi master</Link>
            </div>
            <div className="sidebar-news-link">
                <Link to={`/posts/${phonesData[11].id}/info`}>Motorola Razr 2 could have an in-screen scanner and eight side sensors</Link>
            </div>
        </div>
    )
}

export default Sidebar;