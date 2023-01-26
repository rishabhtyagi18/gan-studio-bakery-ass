import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import ItemList from "./ItemList";
import { selectCartProducts } from "../../Utilities/Utilities";
import Header from "../Header/Header";
import "./css/Checkout.css";

const Checkout = () => {
  const cartProducts = useSelector(selectCartProducts);
  const isCartEmpty = cartProducts.length <= 0;
  const total = useMemo(
    () =>
      cartProducts.reduce(
        (acc, product) => acc + product.sellingPrice * product.cartQuantity,
        0
      ),
    [cartProducts]
  );

  const makePayment = () => {
    const payload = {};

    payload.products = cartProducts.map((product) => ({
      productId: product.id,
      quantity: product.cartQuantity,
      unitPrice: product.sellingPrice,
    }));

    payload.cartTotal = total;
    console.log(payload);
  };

  return (
    <>
        <Header />
        <div className="checkoutpage content">
        <div className="checkout-details">
            <h2 className="headline">Shopping Cart</h2>
            {!isCartEmpty ? (cartProducts.map((product) => (
                <ItemList key={product.id} product={product} />
            ))
            ) : (
            <p className="para">Your shopping cart is empty!</p>
            )}
            {!isCartEmpty && (
                <div className="subtotal">
                    <h3>
                    Subtotal: <span>Rs. {Math.round(total * 100) / 100}</span>
                    </h3>
                    <CustomButton
                        className="pay-now-btn"
                        onClick={makePayment}
                        text="Pay Now"
                    />
                </div>
            )}
        </div>
        </div>
    </>
  );
};

export default Checkout;