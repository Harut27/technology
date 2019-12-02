import React from "react";
import photographyesData from "../../../data-from-backend/photography-data";
import "../style.scss"
import MainCart from "../../app_components/news-main-cart";
import NewsCard from "../../app_components/news-card";


const Photographyes = ()=>{
    return(
        <div className="laptops">
            

            <div className="title-section">

                <div className="laptop-title">
                    <h1>Photography</h1>
                    <span>The latest camera news and reviews, from DSLRs and CSCs to point-and-shoots and accessories, plus the best tips and advice</span>
                </div>

                <div className="title-laptops">
                    <NewsCard size="625x460" image={photographyesData[7].src} hasBg={true}
                        title={photographyesData[7].title}
                        description={photographyesData[7].subtitle}
                        id={photographyesData[7].id}
                        link="/items"
                    />

                    <div className="sub-title-laptop">
                        <NewsCard size="300x300" image={photographyesData[8].src} hasBg={true}
                            title={photographyesData[8].title}
                            id={photographyesData[8].id}
                            link="/items"
                        />
                        <NewsCard size="300x300" image={photographyesData[13].src} hasBg={true}
                            title={photographyesData[13].title}
                            id={photographyesData[13].id}
                            link="/items"
                        />
                    </div>
                   
                </div>
                

                <div className="all-laptops">
                    <span>All Laptops</span>
                </div>

            </div>
            <div className="laptops-content">
                {
                    photographyesData.map((Photography,index)=>{
                        return(
                            <div className="laptops-wrapper">
                                <MainCart image={Photography.src} hasBg={false} key={index}
                                title={Photography.title}
                                description={Photography.subtitle}
                                id={Photography.id}
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

export default Photographyes;