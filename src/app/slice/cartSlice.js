import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            state.value = action.payload;
        },
        increment: (state) => {
            state.value += 1;
            localStorage.setItem("cartCount", state.value);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, increment } = cartSlice.actions;

export default cartSlice.reducer;
