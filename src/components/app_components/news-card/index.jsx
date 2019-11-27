import React from "react";
import "./style.scss";

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
  descriptionLabel
}) => {
  return (
    <div
      className={`
            news-card
            size-${size}
            ${hasBg ? "with-bg" : ""}
        `}
    >
      <img src={image} alt="" />
      <span>{title}</span>
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
