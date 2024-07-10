import React, { useState } from "react";
import "./rating.style.css";
import { RatingProps } from "../types/rating";

const Rating = ({ starCount = 5, showReset = false }: RatingProps) => {
  const stars = new Array(starCount).fill(0);
  const [selectedStar, setSelectedStar] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="container">
      <h1>Star Rating Component</h1>
      <div className="stars">
        {stars.map((_, index) => (
          <span
            className={index < selectedStar || index < hoverValue ? "gold" : ""}
            key={index}
            onMouseEnter={() => setHoverValue(index + 1)}
            onClick={() => setSelectedStar(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
          >
            &#9733;
          </span>
        ))}
      </div>
      {showReset && <button onClick={() => setSelectedStar(0)}>Reset</button>}
    </div>
  );
};

export default Rating;
