import React, { useState, useEffect } from "react";
import star1 from "../img/star2.svg";
import star2 from "../img/star1.svg";

const Description = ({ product, selected }) => {
  const [productDetails, setProductDetails] = useState("");
  useEffect(() => {
    if (product.id === selected) {
      setProductDetails("description");
    } else {
      setProductDetails(" description-hide");
    }
  }, [selected]);
  return (
    <div>
      <div className={productDetails} key={product.id}>
        <h2>${product.price}</h2>
        <h4>{product.description}</h4>
        <div className="star">
          <img src={star1}></img>
          <img src={star1}></img>
          <img src={star1}></img>
          <img src={star1}></img>
          <img src={star2}></img>
        </div>
        <div className="button">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
