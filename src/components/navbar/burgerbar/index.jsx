import React from "react";
// import SocialMediaIcons from 'react-social-media-icons';

import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Burgerbar = ()=>{
    return(
        <div className="burgerbar ">
            <div className="centered burgerbar-wrapper">
                <div className="burgerbar-logo">
                    <span className="burgerbar-logo-text">GS tech</span>
                    <span className="dot">|</span>
                    <span className="strapline">{"The source for Tech Buying Advice".toUpperCase()}</span>
                </div>
                <div className="burgerbar-section">
                    <div className="burgerbar-language">

                    </div>
                    <div className="burgerbar-social">
                        {/* <SocialMediaIcons/> */}
                    </div>
                    <div className="burgerbar-search">
                        <span className="burgerbar-search-text">Search</span>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burgerbar;