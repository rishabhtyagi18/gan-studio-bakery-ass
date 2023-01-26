import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseItemCartQuantity,
  increaseItemCartQuantity,
  removeFromCart,
} from "../../Utilities/Utilities";
import CustomButton from "../CustomButton/CustomButton";
import MegaCart from "../Cart/MegaCart";
import "./ProductList.css";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img className="iconSrc" src={product.imageSrc} alt={product.name} />
      <div className="product-details">
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p className="selling-price">Rs.{product.sellingPrice}</p>
      </div>

      {!product.cartQuantity ? (
        <CustomButton
          text="Add to Cart"
          onClick={() => dispatch(addToCart(product.id))}
        />
      ) : (
        <MegaCart
          quantity={product.cartQuantity}
          onReduce={() => dispatch(decreaseItemCartQuantity(product.id))}
          onIncrease={() => dispatch(increaseItemCartQuantity(product.id))}
          onRemove={() => dispatch(removeFromCart(product.id))}
        />
      )}
    </div>
  );
};

export default ProductList;