import React from "react";
import Star1 from "../img/star1.svg";
import Star2 from "../img/star2.svg";


const Star = ({ rating }) => {
  const showStars = (rate) => {
    let output = [];
    for (let i = 1; i <= 5; i++) {
      if (Math.round(rate) >= i) {
        output.push(<img key={i} src={Star2} />);
      } else {
        output.push(<img key={i} src={Star1} />);
      }
    }
    return output;
  };
  return (
    <div className="rating">
      {showStars(rating.rate)}
      <div className="count">({rating.count})</div>
    </div>
  );
};

export default Star;
