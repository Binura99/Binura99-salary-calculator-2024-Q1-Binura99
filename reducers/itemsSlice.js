'use client';

import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "items",

    initialState: {
        earnings: [],
        deductions:[],
        basicSalary: 0
    },

    reducers: {
        setEarnings: (state, action) => {
            state.earnings = action.payload;
            // console.log("===============", action.payload)
        },
        setDeductions: (state, action) => {
            state.deductions = action.payload;
        },
        setBasicSalary: (state, action) => {
            state.basicSalary = action.payload;
        },
    }
})

export const { setEarnings, setDeductions, setBasicSalary } = itemsSlice.actions;
export default itemsSlice.reducer;