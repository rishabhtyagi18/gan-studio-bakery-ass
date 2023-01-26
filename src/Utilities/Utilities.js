import { createSlice, createSelector } from "@reduxjs/toolkit";
import { products } from "./SampleData";

export const Utilities = createSlice({
  name: "product",
  initialState: { products: products },
  reducers: {
    addToCart: (state, action) => {
      const products = state.products;
      const idx = products.findIndex((item) => item.id === action.payload);
      products[idx].cartQuantity = 1;
    },
    removeFromCart: (state, action) => {
      const products = state.products;
      const idx = products.findIndex((item) => item.id === action.payload);
      products[idx].cartQuantity = 0;
    },
    increaseItemCartQuantity: (state, action) => {
      const products = state.products;
      const idx = products.findIndex((item) => item.id === action.payload);
      products[idx].cartQuantity = (products[idx].cartQuantity || 0) + 1;
    },
    decreaseItemCartQuantity: (state, action) => {
      const products = state.products;
      const idx = products.findIndex((item) => item.id === action.payload);
      products[idx].cartQuantity = Math.max(0, products[idx].cartQuantity - 1);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemCartQuantity,
  decreaseItemCartQuantity,
} = Utilities.actions;

export const selectProducts = (state) => state.product.products;

export const selectTopFourProducts = createSelector(
  [selectProducts],
  (products) => {
    return products.slice(0, 4);
  }
);

export const selectCartProducts = createSelector(
  [selectProducts],
  (products) => {
    return products.filter(
      (product) => product.cartQuantity && product.cartQuantity > 0
    );
  }
);

export default Utilities.reducer;
