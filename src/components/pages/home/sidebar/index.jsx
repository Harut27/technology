import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import "./style.scss";




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
                <span>Samsung Galaxy S10 Lite surprisingly just confirmed by Samsung</span>
            </div>
            <div className="sidebar-news-link">
                <span>AMD launches ridiculously cheap $49 Athlon 3000G processor – which can
                     even be overclocked</span>
            </div>
            <div className="sidebar-news-link">
                <span>Microsoft is letting some users add Gmail to Outlook on the web – see 
                    if you're included</span>
            </div>
            <div></div>
        </div>
    )
}

export default Sidebar;