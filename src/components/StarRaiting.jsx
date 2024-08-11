import React, { useState } from "react";
import "../styles/straRaiting/Styles.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <i
            key={index}
            className={
              ratingValue <= (hover || rating) ? "star filled" : "star"
            }
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </i>
        );
      })}
      <span className="rating-value">{rating}</span>
    </div>
  );
};

export default StarRating;
