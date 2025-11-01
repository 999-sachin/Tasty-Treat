import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import locationSlice from "./locationSlice";

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartSlice,
    location: locationSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

export default store;