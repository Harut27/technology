import React from "react";
import laptopsDataFromBackend from "../../../data-from-backend/laptops-data";
import "../style.scss"
import MainCart from "../../app_components/news-main-cart";
import NewsCard from "../../app_components/news-card";


const Laptops = ()=>{
    return(
        <div className="laptops">
            

            <div className="title-section">

                <div className="laptop-title">
                    <h1>Laptops</h1>
                    <span>Laptops, netbooks, Chromebooks, gaming laptops and portable computing accessories.</span>
                </div>

                <div className="title-laptops">
                    <NewsCard size="625x460" image={laptopsDataFromBackend[0].src} hasBg={true}
                        title={laptopsDataFromBackend[0].title}
                        description={laptopsDataFromBackend[0].subtitle}
                        id={laptopsDataFromBackend[0].id}
                        link=""
                    />

                    <div className="sub-title-laptop">
                        <NewsCard size="300x300" image={laptopsDataFromBackend[1].src} hasBg={true}
                            title={laptopsDataFromBackend[1].title}
                            id={laptopsDataFromBackend[1].id}
                            link=""
                        />
                        <NewsCard size="300x300" image={laptopsDataFromBackend[2].src} hasBg={true}
                            title={laptopsDataFromBackend[2].title}
                            id={laptopsDataFromBackend[2].id}
                            link=""
                        />
                    </div>
                   
                </div>
                

                <div className="all-laptops">
                    <span>All Laptops</span>
                </div>

            </div>
            <div className="laptops-content">
                {
                    laptopsDataFromBackend.map((laptopCart,index)=>{
                        return(
                            <div className="laptops-wrapper">
                                <MainCart image={laptopCart.src} hasBg={false} key={index}
                                title={laptopCart.title}
                                description={laptopCart.subtitle}
                                id={laptopCart.id}
                                /> 
                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

export default Laptops;