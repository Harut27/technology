import React from "react";
import "./style.scss";
import Gaming from "../img-home/gaming.jpg"
import HonorWatch from "../img-home/honor-watch.jpg"


const FreshNews = ()=>{
    return(
        <div className="freshNews">
            
            <div className="freshNewsContainer centered">
                <div className="freshNewsTitle">
                    <h1>Fresh News</h1>
                </div>
                <div className="freshNewsContent">
                    <div className="gaming-section">
                        <img src={Gaming}/>
                        <span className="gaming-section-description">The ambitious future of gaming is here: 
                            our Google Stadia review</span>
                            <span>Google Stadia could become the be-all, 
                                end-all game-streaming platform</span>
                    </div>
                    <div>
                        <div className="honor-watch">
                            <img src={HonorWatch} alt="Watch"/>
                            <span>Honor Watch Magic 2 launch date confirmed - and we've
                                 got the first images</span>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                   
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default FreshNews;