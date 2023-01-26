import React from "react";
import "./css/MegaCart.css";

const MegaCart = ({
  quantity,
  onReduce,
  onIncrease,
  onRemove,
  direction = "column",
  hideRemove = false,
  alignItems = "center",
}) => {
    
  return (
    <div
      className="cart-control"
      style={{ flexDirection: direction, alignItems: alignItems }}
    >
      <div className="counter">
        <button className="quantity" onClick={onReduce}>-</button>
        <p className="qtyText">{quantity}</p>
        <button className="quantity" onClick={onIncrease}>+</button>
      </div>
      {!hideRemove && (
        <button className="remove-cart" onClick={onRemove}>
          Remove from cart
        </button>
      )}
    </div>
  );
};

export default MegaCart;