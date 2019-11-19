import React from "react";
import { Link } from "react-router-dom"
import "./style.scss"


const Trend = ()=>{
    const trendManu = ['Buying Guides', 'Disney+', 'Black Friday', 'iPhone 11', 'Best Laptops', 'PS5', 'Best VPN'];
    return(

        <div className="trending-section">
            <div className="trending-section-heder">
                <span>TRANDING</span>
            </div>

            <div className="tending-pages">
            {
                trendManu.map((trendingPage, index)=>{
                    return(
                        <span className={`trending_page ${trendingPage.toLowerCase().replace(/\s/g, '')}` } key={index}>
                            <Link>{trendingPage}</Link>
                        </span>
                    )
                })
            }
            </div>
        </div>
    
    )
}

export default Trend;