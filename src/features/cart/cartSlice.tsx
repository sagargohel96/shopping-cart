import { createSlice } from "@reduxjs/toolkit";
import { ProductInterface } from "../../interface/ProductInferface";
export interface CartState {
  value: ProductInterface[];
  quanity?: number;
}
const initialState: CartState = {
  value: [],
  quanity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        state.quantity = state.quanity
          uan;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      let products: ProductInterface[];
      if (state.value.length === 0) {
        products = [action.payload];
      } else {
        products = [...state.value, action.payload];
      }
      return {
        ...state,
        value: products,
      };
    },
    removeFromCart: (state, action) => {
      let products: ProductInterface[];
      if (state.value.length === 0) {
        return;
      } else {
        products = state.value.filter((item, index) => {
          return item.id !== action.payload;
        });
      }
      return {
        ...state,
        value: products,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
