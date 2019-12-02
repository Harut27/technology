import React from "react";
import "./style.scss";
import { Link } from "react-router-dom"

// size - required (270x220, 300x300, 340x350, 460x330, 460x450, 625x460)
// image - required
// title - required
// hasBg - required
// description - optional
// descriptionLabel - optional
const NewsCard = ({
  image,
  size,
  hasBg,
  title,
  description,
  descriptionLabel,
  link
}) => {
  return (
    <div
      className={`
            news-card
            size-${size}
            ${hasBg ? "with-bg" : ""}
        `}
    >
      <Link to={link}>
        <img src={image} alt="" />
      </Link>
      <Link to={link}>
        <span>{title}</span>
      </Link>
      {description && (
        <p>
          {descriptionLabel && <span>{descriptionLabel}</span>}

          {description}
        </p>
      )}
    </div>
  );
};

NewsCard.defaultProps = {
  hasBg: false
};
export default NewsCard;
