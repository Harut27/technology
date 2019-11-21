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




// <Carousel elements={[
//   {image: "http://beauty-around.com/media/k2/items/cache/5e7051771328568c4bdc725564734b1b_L.jpg", legent: "Legend1"},
//   {image: "https://i.ytimg.com/vi/Jt5qKesqk0s/maxresdefault.jpg", legent: "Legend2"},
//   {image: "https://www.dhresource.com/600x600/f2/albu/g6/M01/1D/A5/rBVaR1txBEyAJn0kAAcv6CEYD-4585.jpg", legent: "Legend3"},
//   {image: "https://ae01.alicdn.com/kf/HTB1SrlOumtYBeNjSspkq6zU8VXaD/Fashion-Pets-Harness-Animal-Dog-Back-Angel-Wings-Style-Pet-Beauty-Protection-Collar-for-Dogs.jpg", legent: "Legend1"},
// ]} />