import React,{ useState, useEffect } from "react";
import FreshNews from "./freshnews";
import HomeNews from "./home-news";

const Home = ()=>  {

    return(

      <div className="home-content">
        <FreshNews/>
        <HomeNews/>
      </div>
    )
}




export default Home;
