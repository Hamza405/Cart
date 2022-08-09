import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui_slices";
import cartSlice from "./cart_slices";

const store = configureStore( {
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
} );

export default store;