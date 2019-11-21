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

                <NewsCard size="460x450" image={BlackFriday} hasBg={true}
                    title="Get your cybersecurity needs sorted with Bitdefender's new Black Friday deal"
                    description="Don't miss out on these top-notch Black Friday deal - save up to 64% on the world's best antivirus software."
                    descriptionLabel="Black Friday 2019"
                />

                <div className="middle-cart-news">
                    <img src={IntelCPU} alt=""/>
                    <span>Intel apologizes for CPU shortages – which remain a problem
                         (AMD will be glad to hear)</span>
                    <p>
                        It’s a case of fewer CPUs, more problems for Intel, with supply
                         issues exacerbated by intense competition from AMD.
                    </p>
                </div>

                <div className="middle-cart-news">
                    <img src={Ps4Ps4Pro} alt=""/>
                    <span>PS4 and PS4 Pro Black Friday deals 2019: what prices and bundles
                         to expect</span>
                    <p>
                        <span>black friday 2019</span>
                         We'll tell you what PS4, PS4 Pro, PSVR, gaming and accessory deals
                          to expect on Black Friday and Cyber Monday 2019.
                    </p>
                </div>

                <div className="small-cart-wrapper">
                    <NewsCard size="340x350" image={StarWars} hasBg={false}
                        title="2022's Star Wars movie will be announced in January and has a director, says report"
                        description="2022's Star Wars film won't be Rian Johnson's movie or from the Game of Thrones creators. So who's directing it?"
                    />

                    <div className="small-cart">
                        <img src={MobileDeals} alt=""/>
                        <span>The best mobile phone deals in the UK this month</span>
                        <p>Search and compare all of the UK's mobile phone deals or go with 
                            our editor's recommendations.</p>
                    </div>

                    <div className="small-cart">
                        <img src={S10} alt=""/>
                        <span>Samsung Galaxy S10 Lite surprisingly just confirmed by Samsung
                        </span>
                        <p>
                            Samsung has just mentioned the Galaxy S10 Lite by name, even
                             though it's a name that doesn't make much sense.</p>
                    </div>

                    <div className="small-cart">
                        <img src={BlackFriday} alt=""/>
                        <span>Get your cybersecurity needs sorted with Bitdefender's new
                             Black Friday deal </span>
                        <p>
                            Don't miss out on these top-notch Black Friday deal - save up to
                             64% on the world's best antivirus software.</p>
                    </div>

                    <div className="small-cart">
                        <img src={Apple} alt=""/>
                        <span>Apple could be making an iTunes successor specifically 
                            for Windows</span>
                        <p>
                            Apple is looking for a senior software engineer who 'loves music' 
                            and has experience making Windows apps.</p>
                    </div>

                    <div className="small-cart">
                        <img src={BestAppleWatch} alt=""/>
                        <span>The best Apple Watch apps we've used in 2019</span>
                        <p>
                             Our list of the very best Apple Watch apps for fitness,
                              sleep, travel and more.</p>
                    </div>

                    <div className="small-cart">
                        <img src={Rupauls} alt=""/>
                        <span>How to watch RuPaul's Drag Race UK online: stream from the
                             UK or abroad</span>
                        <p>
                            Don't miss a second of the glamorous action, use this handy
                             guide to see how to watch RuPaul's Drag Race UK online from
                              anywhere.</p>
                    </div>

                    <div className="small-cart">
                        <img src={Athlon} alt=""/>
                        <span>AMD launches ridiculously cheap $49 Athlon 3000G processor – 
                            which can  even be overclocked</span>
                        <p>AMD’s new Athlon 3000G processor costs less than $50, but
                             it looks like it could be a formidable little CPU.</p>
                    </div>

                    <div className="all-news">
                        <Link to='/news'>View all news </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeNews;
