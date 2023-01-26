import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { selectCartProducts } from "../../Utilities/Utilities";
import { useNavigate } from "react-router";
import { useResponsive } from "../../Utilities/Devices";

const Cart = () => {
  const cartProducts = useSelector(selectCartProducts);
  const isMobile = useResponsive();
  const navigate = useNavigate();

  const totalCartQuantity = useMemo(
    () => cartProducts.reduce((sum, product) => product.cartQuantity + sum, 0),
    [cartProducts]
  );

  return (
    <CustomButton
      text={isMobile ? totalCartQuantity : `Cart (${totalCartQuantity})`}
      onClick={() => navigate("/checkout")}
    />
  );
};

export default Cart;
