import { createSlice } from "@reduxjs/toolkit";
import { ProductInterface } from "../../interface/ProductInferface";
export interface CartState {
  value: ProductInterface[];
  total?: number;
}
const initialState: CartState = {
  value: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("action", action);

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
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
