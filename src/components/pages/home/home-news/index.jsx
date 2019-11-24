import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "../../../app_components/news-card";
import "./style.scss";

import BlackFriday from "../../../../img/blackfriday2.jpg";
import IntelCPU from "../../../../img/intelcpu.jpg";
import Ps4Ps4Pro from "../../../../img/ps4-ps4-pro.jpg";
import StarWars from "../../../../img/starwars.jpg";
import MobileDeals from "../../../../img/mobiledeals.jpg";
import S10 from "../../../../img/s10.jpg";
import Apple from "../../../../img/apple.jpg";
import BestAppleWatch from "../../../../img/bestapplewatch.jpg";
import Rupauls from "../../../../img/rupauls.jpg";
import Athlon from "../../../../img/athlon.jpg";




const HomeNews = ()=>{
    return(
        <div className="homeNews">
            <div className="centered card-wrapper">

                <div className="more-fresh-news">
                    <Link to="/news">View More News >></Link>
                </div>

                <NewsCard size="460x450" image={BlackFriday} hasBg={false}
                    title="Get your cybersecurity needs sorted with Bitdefender's new Black Friday deal"
                    description="Don't miss out on these top-notch Black Friday deal - save up to 64% on the world's best antivirus software."
                    descriptionLabel="Black Friday 2019"
                />
                <NewsCard size="460x450" image={IntelCPU} hasBg={false}
                title="Intel apologizes for CPU shortages – which remain a problem
                (AMD will be glad to hear)"
                description="It’s a case of fewer CPUs, more problems for Intel, with supply
                issues exacerbated by intense competition from AMD."/>
                <NewsCard size="460x450" image={Ps4Ps4Pro} hasBg={false}
                title="PS4 and PS4 Pro Black Friday deals 2019: what prices and bundles
                to expect"
                description="We'll tell you what PS4, PS4 Pro, PSVR, gaming and accessory deals
                to expect on Black Friday and Cyber Monday 2019."
                descriptionLabel="black friday 2019"/>  


                <div className="small-cart-wrapper">
                    <NewsCard size="340x350" image={StarWars} hasBg={false}
                        title="2022's Star Wars movie will be announced in January and has a director, says report"
                        description="2022's Star Wars film won't be Rian Johnson's movie or from the Game of Thrones creators. So who's directing it?"
                    />
                    <NewsCard size="340x350" image={MobileDeals} hasBg={false}
                    title="The best mobile phone deals in the UK this month"
                    description="Search and compare all of the UK's mobile phone deals or go with 
                    our editor's recommendations."/>

                    <NewsCard size="340x350" image={S10} hasBg={false}
                    title="Samsung Galaxy S10 Lite surprisingly just confirmed by Samsung"
                    description="Samsung has just mentioned the Galaxy S10 Lite by name, even
                    though it's a name that doesn't make much sense."/>

                    <NewsCard size="340x350" image={BlackFriday} hasBg={false}
                    title="Get your cybersecurity needs sorted with Bitdefender's new
                    Black Friday deal "
                    description="Don't miss out on these top-notch Black Friday deal - save up to
                    64% on the world's best antivirus software."/>

                    <NewsCard size="340x350" image={Apple} hasBg={false}
                    title="Apple could be making an iTunes successor specifically 
                    for Windows"
                    description="Apple is looking for a senior software engineer who 'loves music' 
                    and has experience making Windows apps."/>

                    <NewsCard size="340x350" image={BestAppleWatch} hasBg={false}
                    title="The best Apple Watch apps we've used in 2019"
                    description="Our list of the very best Apple Watch apps for fitness,
                    sleep, travel and more."/>

                    <NewsCard size="340x350" image={Rupauls} hasBg={false}
                    title="How to watch RuPaul's Drag Race UK online: stream from the
                    UK or abroad"
                    description="Don't miss a second of the glamorous action, use this handy
                    guide to see how to watch RuPaul's Drag Race UK online from
                     anywhere."/>

                     <NewsCard size="340x350" image={Athlon} hasBg={false}
                     title="AMD launches ridiculously cheap $49 Athlon 3000G processor – 
                     which can  even be overclocked"
                     description="AMD’s new Athlon 3000G processor costs less than $50, but
                     it looks like it could be a formidable little CPU."/>

                    <div className="all-news">
                        <Link to='/news'>View all news </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeNews;
