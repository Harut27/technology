import React from "react";
import "./style.scss"
import MainCart from "../../app_components/news-main-cart";
import NewsCard from "../../app_components/news-card";

import NflLiveStream from "../../../img/nfl-live-stream.jpg";
import Pokemon from "../../../img/pokemon.jpg";


import StarWarJedi from "../../../img/starwarjedi-falenorder.jpg";
import Bestmobileuk from "../../../img/bestmobileuk.jpg";
import Mandalorian from "../../../img/mandalorian.jpg";
import Watchmarvel from "../../../img/watchmarvel.jpg";
import Enabledarkmode from "../../../img/enabledarkmode.jpg";
import Kubernetestaming from "../../../img/kubernetestaming.jpg";
import Buymac from "../../../img/buymac.jpg";





const HowTo = ()=>{

    return(
        <div className="howto">

            <div className="howto-header">
                <h2>How to</h2>
                <span>Tips and tricks to help you get more from your tech and gadgets</span>
            </div>
            <div className="title-item">
                <NewsCard size="625x460" image={NflLiveStream} hasBg={true}
                    title="NFL live stream: how to watch every 2019-20 regular season football game online from anywhere"
                    description="Football season is in full swing"
                    id=""
                    link=""
                />
            </div>
            <div className="howtoList">
                <span>LATEST HOW TOS</span>
            </div>

            <div className="howto-container">

                <MainCart image={Pokemon} hasBg={false}
                title="Pokémon Sword and Shield Gigantamax Eevee and Pikachu: how to claim your free Pokémon"
                description="
                Pokémon Let’s Go players can get a free Gigantamax Eevee or Pikachu in Sword and Shield. Here’s where to find them."               
               />

               <MainCart image={StarWarJedi}  hasBg={false}
               title="Star Wars Jedi: Fallen Order: how to complete the Tomb of Eilram puzzle"
               description="
               Pokémon Let’s Go players can get a free Gigantamax Eevee or Pikachu in Sword and Shield. Here’s where to find them."
               />

               <MainCart image={Bestmobileuk}  hasBg={false}
               title="The best mobile phone deals in the UK this month"
               description="
               Stuck on Fallen Order's Tomb of Eilram puzzle? Let us help you."
               />

               <MainCart image={Mandalorian}  hasBg={false}
               title="How to watch The Mandalorian online – stream the new Star Wars show"
               description="
               Sword and Shield feature a new item that gives you more control over the game’s volume."
               />

               <MainCart image={Watchmarvel}  hasBg={false}
               title="How to watch the Marvel movies in order"
               description="
               Watching the MCU from start to finish? Here’s the correct Marvel movie viewing order."
               />

               <MainCart image={Enabledarkmode}  hasBg={false}
               title="How to enable dark mode for Instagram"
               description="
               Try dark mode for Instagram and enjoy an experience that's easier on the eye, whether you use Android or iOS."
               />

               <MainCart image={Kubernetestaming}  hasBg={false}
               title="Kubernetes - taming the cloud"
               description="
               Kubernetes has transformed how businesses run from slow-moving, in-house servers to cloud-based, highly responsive and resilient systems."
               />

               <MainCart image={Buymac}  hasBg={false}
               title="How to buy a MacBook on Black Friday and Cyber Monday"
               description="
               We show you how to score a killer MacBook deal this Black Friday."
               />
              
            </div>

        </div>
    )
}

export default HowTo;