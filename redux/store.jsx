'use client';

import itemsSlice from "@/reducers/itemsSlice";
import { configureStore } from "@reduxjs/toolkit"

 const store = configureStore({
  reducer: {
    items: itemsSlice
  }
})

export default store;