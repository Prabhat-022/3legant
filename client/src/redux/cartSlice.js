import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        cartProduct: [],
        statusTab: false
    },

    reducers: {

        // addToCart: (state, action) => {
        //     const { product, productId, quantity } = action.payload;
        //     const existingItem = state.cart.findIndex((item) => item.productId === productId);

        //     if (existingItem >= 0) {

        //         state.cart[existingItem].quantity += quantity;
        //         return;
        //     }
        //     else {

        //         state.cart.push({product, productId, quantity });
        //     }
        // },

        addToCart: (state, action) => {
            // const { _id } = action.payload
            // const existingItem = state.cart.findIndex((item) => item._id === _id);
            // if (existingItem) {
            //     return
            // } else {

            //     state.cart.push(action.payload)

            // }

            const existingItem = state.cart.findIndex((item) => item._id === action.payload._id);
            if (existingItem >= 0) {
                return
            } else {
                state.cart.push(action.payload)
            }
        },

        setCartProduct: (state, action) => {
            state.cartProduct = action.payload
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        toggleStatusTab: (state) => {
            if (state.statusTab === false) {
                state.statusTab = true
            }
            else {
                state.statusTab = false
            }
        }

    }
})

export const { addToCart, removeFromCart, setCartProduct, toggleStatusTab } = cartSlice.actions

export default cartSlice.reducer