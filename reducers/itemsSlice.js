'use client';

import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "items",

    initialState: {
        Item: "",
    },

    reducers: {
        setItem: (state, action) => {
            state.Item = action.payload.Item;
        },
    }
})

export const { setItem } = itemsSlice.actions;
export default itemsSlice.reducer;