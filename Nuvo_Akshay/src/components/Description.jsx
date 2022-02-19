import React, { useState, useEffect } from "react";

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
        <div className="button">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
