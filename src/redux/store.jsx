import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cartSlice";
import adminSlice from "./slices/adminSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    admin: adminSlice,
  },
});

export default store;
