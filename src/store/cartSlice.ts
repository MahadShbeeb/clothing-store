import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../entities/Product";

export interface Cart {
    cart: Product[];
}

const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] } as Cart,
    reducers: {
    addToCart: (state, action) => {
    const productInCart = state.cart.find(product =>product.id === action.payload.id);

    if (productInCart) {
        if (productInCart.quantity !== undefined) {
            productInCart.quantity++;
        }} else {
        state.cart.push({ ... action.payload, quantity: 1 });
        }
    },
    removeFromCart:(state, action)=>{
        state.cart = state.cart.filter(product => product.id !== action.payload.id);
    },
    increaseQuantity: (state,action) => {
        const product = state.cart.find((product) => product.id === action.payload.id);
        if (product && product.quantity !== undefined) {
            product.quantity++;
        }
    },
    decreaseQuantity: (state,action) => {
        const product = state.cart.find((product) => product.id === action.payload.id);
        if (product && product.quantity !== undefined && product.quantity >= 1) {
            if (product.quantity<=1){
            state.cart = state.cart.filter(product => product.id !== action.payload.id);
            }
            product.quantity--;
        }
    },
    clearCart :(state)=>{
        state.cart = []
    }
}
});

export const { addToCart ,removeFromCart , increaseQuantity , decreaseQuantity,clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
