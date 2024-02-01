import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
    },
    reducers: {
        setCart: (state, action) => {
            state.value = action.payload;
        },
        addToCart: (state, action) => {
            let product = action.payload;
            let temp = [...state.value];

            if (temp.find((el) => el._id == product._id)) {
                temp = temp.map((el) => {
                    if (el._id == product._id) {
                        return { ...el, quantity: el.quantity + 1 };
                    }
                    return el;
                });
            } else {
                temp.push({ ...product, quantity: 1 });
            }

            state.value = temp;
            localStorage.setItem("cartItems", JSON.stringify(state.value));
        },
        increment: (state, action) => {
            let product = action.payload;
            let temp = [...state.value];
            if (temp.find((el) => el._id == product._id)) {
                temp = temp.map((el) => {
                    if (el._id == product._id) {
                        return { ...el, quantity: el.quantity + 1 };
                    }
                    return el;
                });
            }
            state.value = temp;
            localStorage.setItem("cartItems", JSON.stringify(state.value));
        },
        decrement: (state, action) => {
            let product = action.payload;
            let temp = [...state.value];
            if (temp.find((el) => el._id == product._id)) {
                temp = temp.map((el, index) => {
                    if (el._id == product._id) {
                        return { ...el, quantity: el.quantity - 1 };
                    }
                    return el;
                });
            }
            temp = temp.filter((el) => el.quantity > 0);
            state.value = temp;
            localStorage.setItem("cartItems", JSON.stringify(state.value));
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCart, addToCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
