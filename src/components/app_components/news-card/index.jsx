import  React from "react";
import "./style.scss";

// size - required (270x220, 300x300, 340x350, 460x330, 460x450, 625x460)
// image - required
// title - required
// hasBg - required
// description - optional
// descriptionLabel - optional
const NewsCard = (props) => {
    return (
        <div className={`
            news-card
            size-${props.size}
            ${props.hasBg ? "with-bg" : ""}
        `}>
            <img src={props.image} alt=""/>
            <span>{props.title}</span>
            {props.description && (
                <p>
                    {props.descriptionLabel && (
                        <span>{props.descriptionLabel}</span>
                    )}

                    {props.description}
                </p>
            )}
        </div>
    );
};

export default NewsCard;
