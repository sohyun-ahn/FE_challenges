import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(`Item(ID:${action.payload.id}) not found in basket`);
      }
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

// Selectors
export const selectBasketItems = (state) => state.basket.items; // 장바구니에 담겨있는 item들
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0); // 장바구니에 담긴 아이템들의 총 가격
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const { addToBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
