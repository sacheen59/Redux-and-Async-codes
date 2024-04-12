import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./ui-slice";
import cartSlice from "./cart";


const store = configureStore({
    reducer: {
        ui: UiSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store;