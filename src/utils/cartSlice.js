import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalItemsCount: 0,
    restaurantInfo: null, // To track which restaurant the cart belongs to
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (!item?.id) {
        console.error("Invalid item: missing ID");
        return;
      }
      
      const restaurant = item.restaurant;
      // If adding from a new restaurant, clear the cart first
      if (state.restaurantInfo && state.restaurantInfo.id !== restaurant.id) {
          state.items = {};
          state.totalItemsCount = 0;
          state.restaurantInfo = restaurant;
      }

      if (!state.restaurantInfo) {
        state.restaurantInfo = restaurant;
      }

      const existingItem = state.items[item.id];
      const quantity = existingItem?.quantity ? existingItem.quantity + 1 : 1;
      
      state.items[item.id] = {
        ...item,
        quantity,
        price: item.price || item.defaultPrice || 0,
      };

      state.totalItemsCount = Object.values(state.items).reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );
    },
    removeItem: (state, action) => {
      const id = action.payload;
      if (!id || !state.items[id]) {
        console.error("Invalid item ID or item not found in cart");
        return;
      }

      const item = state.items[id];
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        delete state.items[id];
      }

      state.totalItemsCount = Math.max(0, state.totalItemsCount - 1);
      
      if (state.totalItemsCount === 0) {
        state.restaurantInfo = null;
      }
    },
    clearCart: (state) => {
      state.items = {};
      state.totalItemsCount = 0;
      state.restaurantInfo = null;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
