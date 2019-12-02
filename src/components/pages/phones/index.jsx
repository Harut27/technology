import React from "react";
import phonesDataFromBackend from "../../../data-from-backend/phones-data";
import "../style.scss"
import MainCart from "../../app_components/news-main-cart";
import NewsCard from "../../app_components/news-card";


const Phones = ()=>{


    return(
        <div className="phones">
            

            <div className="title-and-titlePhone">

                <div className="title-text">
                    <h1>Phones</h1>
                    <span>iPhone, Android phones, Windows Phones and more plus the best free and paid apps</span>
                </div>

                <div className="title-photos">
                    <NewsCard size="625x460" image={phonesDataFromBackend[0].src} hasBg={true}
                        title={phonesDataFromBackend[0].title}
                        description={phonesDataFromBackend[0].subtitle}
                        id={phonesDataFromBackend[0].id}
                        link="/items"
                    />

                    <div className="sub-title-photos">
                        <NewsCard size="300x300" image={phonesDataFromBackend[1].src} hasBg={true}
                            title={phonesDataFromBackend[1].title}
                            id={phonesDataFromBackend[1].id}
                            link="/items"
                        />
                        <NewsCard size="300x300" image={phonesDataFromBackend[2].src} hasBg={true}
                            title={phonesDataFromBackend[2].title}
                            id={phonesDataFromBackend[2].id}
                            link="/items"
                        />
                    </div>
                   
                </div>
                

                <div className="all-phones">
                    <span>All Phones</span>
                </div>

            </div>
            <div className="phones-content">
                {
                    phonesDataFromBackend.map((photocart,index)=>{
                        return(
                            <div className="phones-wrapper">
                                <MainCart image={photocart.src} hasBg={false} key={index}
                                title={photocart.title}
                                description={photocart.subtitle}
                                id={photocart.id}
                                link="/items"
                                /> 
                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

export default Phones;