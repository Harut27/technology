import React from "react"
import "./style.scss"

//image - required
// title - required
// hasBg - required
// description - optional
// descriptionLabel - optional

const MainCart = (props)=>{
    return(
        <div className={`news-main-cart ${props.hasBg ? "with-bg" : ""}`} >
            
            <img src={props.image} alt=""/>

            <div className="news-main-cart-description">
                <span> {props.title} </span>
                {props.description && (
                    <p>
                        {props.descriptionLabel && (
                            <span>{props.descriptionLabel}</span>
                        )}

                        {props.description}
                    </p>
                )}
            </div>
            
        </div>
    )
}

export default MainCart;