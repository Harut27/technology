import React from "react";
import NewsCard from "../../../app_components/news-card";
import "./style.scss";
import { Link } from "react-router-dom"

import Gaming from "../../../../img/gaming.jpg";
import HonorWatch from "../../../../img/honor-watch.jpg";
import BlackFriday from "../../../../img/black-friday.jpg";
import DisneyPlus from "../../../../img/disney-plus.jpg";
import PhotoshopIPad from "../../../../img/photoshop-iPad.jpg";
import Ps5 from "../../../../img/ps5.jpg";
import GalaxyS10 from "../../../../img/galaxy-s10.jpg";
import Ibm from "../../../../img/ibm.jpg";
import Sidebar from "../sidebar";



const FreshNews = ()=>{
    return(
        
        <div className="freshNews centered">
            <div className="freshNewsContainer">
                <div className="freshNewsContent">

                    <div className="freshNewsTitle">
                        <h1>
                             Fresh News
                        </h1>
                    </div>
                    
                    <NewsCard size="625x460" image={Gaming} hasBg={true}
                        title="The ambitious future of gaming is here: our Google Stadia review"
                        description="Google Stadia could become the be-all, end-all game-streaming platform"
                    />

                    <div className="full-supper-mini-section">
                        <NewsCard size="270x220" image={HonorWatch} hasBg={true}
                            title="Honor Watch Magic 2 launch date confirmed - and we've got the first images"
                        />
                        <NewsCard size="270x220" image={BlackFriday} hasBg={true}
                            title="Walmart is already offering big Black Friday-style discounts"
                        />
                    </div>

                    <div className="mini-cart-section">

                    <NewsCard size="300x300" image={DisneyPlus} hasBg={true}
                            title="We've got some tips and tricks for Disney+"
                        />
{/* 
                        <div className="full-mini-cart">
                            <img src={DisneyPlus} alt=""/>
                            <span>We've got some tips and tricks for Disney+</span>
                        </div> */}
                        <div className="full-mini-cart">
                            <img src={PhotoshopIPad} alt=""/>
                            <span>Not my Photoshop: our Photoshop for iPad review</span>
                        </div>
                        <div className="full-mini-cart">
                            <img src={Ps5} alt=""/>
                            <span>PS5 price won't be as bad as we thought, if this leak is to be believed</span>
                        </div>
                    </div>

                    <div className="middle-cart-section">
                        <div className="middle-cart">
                            <img src={GalaxyS10} alt=""/>
                            <span>Get a Samsung Galaxy S10e for under $400 with this early Black Friday deal</span>
                        </div>
                        <div className="middle-cart">
                            <img src={Ibm} alt=""/>
                            <span>IBM launches huge open-source security platform</span>
                        </div>
                    </div>

                   
                </div>
            </div>
            <Sidebar/>
        </div>

    )
}

export default FreshNews;