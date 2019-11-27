import React from "react"
import { Link } from "react-router-dom";
import "./style.scss"



const MainCart = (props)=>{
    return(
        <div className={`news-main-cart ${props.hasBg ? "with-bg" : ""}`} >
            
            <Link to={props.link}>
                <img src={props.image} alt=""/>
            </Link>

            <div className="news-main-cart-description">
                <Link to={props.link}>
                    <span> {props.title} </span>
                </Link>

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