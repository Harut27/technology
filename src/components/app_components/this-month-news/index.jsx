import React from "react";
import "./style.scss";

import NewsCard from "../news-card";


import laptopsData from "../../../data-from-backend/laptops-data";
import HowtoData from "../../../data-from-backend/howto-data";
import phonesData from "../../../data-from-backend/phones-data";
import photographyesData from "../../../data-from-backend/photography-data";
import tvsData from "../../../data-from-backend/tvs-data";



const ThisMonthsNews = () => {
    
    return(
        <div className="this-Months-News">

            <div className="this-months-news-title">
                <h3>This Month's News</h3>
            </div>

            
                <NewsCard size="300x300" image={HowtoData[6].src} hasBg={true}
                    title={HowtoData[6].title}
                    link={`/posts/${HowtoData[6].id}/info`}
                />
                <NewsCard size="300x300" image={tvsData[10].src} hasBg={true}
                    title={tvsData[10].title}
                    link={`/posts/${tvsData[10].id}/info`}
                />
                <NewsCard size="300x300" image={phonesData[6].src} hasBg={true}
                    title={phonesData[6].title}
                    link={`/posts/${phonesData[6].id}/info`}
                />
                <NewsCard size="300x300" image={HowtoData[10].src} hasBg={true}
                    title={HowtoData[10].title}
                    link={`/posts/${HowtoData[10].id}/info`}
                />
                <NewsCard size="300x300" image={photographyesData[4].src} hasBg={true}
                    title={photographyesData[4].title}
                    link={`/posts/${photographyesData[4].id}/info`}
                />
                <NewsCard size="300x300" image={tvsData[10].src} hasBg={true}
                    title={tvsData[10].title}
                    link={`/posts/${tvsData[10].id}/info`}
                />
                <NewsCard size="300x300" image={phonesData[3].src} hasBg={true}
                    title={phonesData[3].title}
                    link={`/posts/${phonesData[3].id}/info`}
                />
                <NewsCard size="300x300" image={laptopsData[7].src} hasBg={true}
                    title={laptopsData[7].title}
                    link={`/posts/${laptopsData[7].id}/info`}
                />
                <NewsCard size="300x300" image={photographyesData[8].src} hasBg={true}
                    title={photographyesData[8].title}
                    link={`/posts/${photographyesData[8].id}/info`}
                />

            

        </div>
    )
};


export default ThisMonthsNews;