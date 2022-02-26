import React, {useState, useEffect} from "react";
import ArrowLeft from "../img/arrow1.svg";
import ArrowRight from "../img/arrow2.svg";


const Select = ({product, selected, setSelected}) => {
  const [arrow, setArrow] = useState(true);
  useEffect(() => {
    if(product.id === selected){
      setArrow(true);
    }
    else{
      setArrow(false);
    }
  })

  return (
    <div
      className="select"
      onClick={() => setSelected(product.id)}
    >
      <img className="productImg" src={product.image} />
      <br />
      <p>{product.title}</p>
      {arrow ? (<img src={ArrowLeft} alt=""/>) : (<img src={ArrowRight} alt=""/>)}
    </div>
  );
};

export default Select;
