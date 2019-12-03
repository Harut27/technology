import React,{ useState, useEffect } from "react";
import FreshNews from "./freshnews";
import HomeNews from "./home-news";
import ThisMonthsNews from "../../app_components/this-month-news"


const Home = ()=>  {

    return(

      <div className="home-content">
        <FreshNews/>
        <HomeNews/>

      </div>
    )
}




export default Home;
