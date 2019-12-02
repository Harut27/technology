import React from "react"
import { Link } from "react-router-dom";
import "./style.scss"



const MainCart = ({
    image,
    hasBg,
    title,
    description,
    descriptionLabel,
    link
  })=>{
    return(
        <div className={`news-main-cart ${hasBg ? "with-bg" : ""}`} >
            
            <Link to={link}>
                <img src={image} alt=""/>
            </Link>

            <div className="news-main-cart-description">
                <Link to={link}>
                    <span> {title} </span>
                </Link>

                {description && (
                    <p>
                        {descriptionLabel && (
                            <span>{descriptionLabel}</span>
                        )}

                        {description}
                    </p>
                )}
            </div>
            
        </div>
    )
}

export default MainCart;