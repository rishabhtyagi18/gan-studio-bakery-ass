import React from "react";
import { useDispatch } from "react-redux";
import MegaCart from "../Cart/MegaCart";
import {
  decreaseItemCartQuantity,
  increaseItemCartQuantity,
  removeFromCart,
} from "../../Utilities/Utilities";
import "./css/ItemList.css";

const ItemList = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div key={product.id} className="checkout-item">
      <img className="imageSrc" src={product.imageSrc} alt={product.name} />
      <div className="checkout-item-details">
        <div className="info-quantity">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <MegaCart
            quantity={product.cartQuantity}
            onReduce={() => dispatch(decreaseItemCartQuantity(product.id))}
            onIncrease={() => dispatch(increaseItemCartQuantity(product.id))}
            hideRemove={true}
            alignItems="start"
          />
        </div>
        <img 
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            className="close-icon"
            onClick={() => dispatch(removeFromCart(product.id))}
        />
      </div>
    </div>
  );
};

export default ItemList;