import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faYoutube,fa } from '@fortawesome/free-brands-svg-icons';



const Burgerbar = ()=>{
    return(
        <div className="burgerbar ">
            <div className="centered burgerbar-wrapper">
                <div className="burgerbar-logo">
                    <Link to="/" className="burgerbar-logo-text">GS tech</Link>
                    <span className="dot">|</span>
                    <span className="strapline">{"The source for Tech Buying Advice".toUpperCase()}</span>
                </div>
                <div className="burgerbar-section">
                    <div className="burgerbar-language">

                    </div>
                    <div className="burgerbar-social">
                        {/* <SocialMediaIcons/> */}
                    </div>
                    <div className="burgerbar-icons">
                        <div className="facebook-icon">
                        <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className="twitter-icon">
                        <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="youtube-icon">
                        <FontAwesomeIcon icon={faYoutube} />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burgerbar;