import React from "react";
import { Link } from "react-router-dom"

import NewsCard from "../../../app_components/news-card";


import Gaming from "../../../../img/gaming.jpg";
import HonorWatch from "../../../../img/honor-watch.jpg";
import BlackFriday from "../../../../img/black-friday.jpg";
import DisneyPlus from "../../../../img/disney-plus.jpg";
import PhotoshopIPad from "../../../../img/photoshop-iPad.jpg";
import Ps5 from "../../../../img/ps5.jpg";
import GalaxyS10 from "../../../../img/galaxy-s10.jpg";
import Ibm from "../../../../img/ibm.jpg";
import Sidebar from "../sidebar";

const News = ()=>{
    return(
        <div className="new-wrapper">
            <div className="top-news">
            <NewsCard size="625x460" image={Gaming} hasBg={true}
                        title="The ambitious future of gaming is here: our Google Stadia review"
                        description="Google Stadia could become the be-all, end-all game-streaming platform"/>

            </div>

            <div className="news-container">
 
                        <NewsCard size="340x350" image={HonorWatch} hasBg={true}
                            title="Honor Watch Magic 2 launch date confirmed - and
                             we've got the first images"/>

                        <NewsCard size="340x350" image={BlackFriday} hasBg={true}
                            title="Walmart is already offering big Black Friday-style 
                            discounts" />

                        <NewsCard size="340x350" image={DisneyPlus} hasBg={true}
                        title="We've got some tips and tricks for Disney+"/>

                        <NewsCard size="340x350" image={PhotoshopIPad} hasBg={true}
                        title="Not my Photoshop: our Photoshop for iPad review"/>

                        <NewsCard size="340x350" image={Ps5} hasBg={true}
                        title="PS5 price won't be as bad as we thought, if this leak is to be believed"/>

                        <NewsCard size="340x350" image={GalaxyS10} hasBg={true} 
                         title="Get a Samsung Galaxy S10e for under $400 with this early Black Friday deal"/>
            </div>

        </div>
    )
}

export default News;