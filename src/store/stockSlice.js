import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stocks: [],
};

const stockSlice = createSlice({
    name: "stock",
    initialState,
    reducers: {
        setAllStocks(state, action) {
            state.stocks = action.payload.data;
        },
    },
});

export const stockActions = stockSlice.actions;
export default stockSlice;
