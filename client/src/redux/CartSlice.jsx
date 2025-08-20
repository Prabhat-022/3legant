import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: [],
    statusTab: false,   
    loading: false,
    error: null
}



export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.item.length === 0) {
                state.item.push(...action.payload)
            }
            else {
                const existItem = state.item.find(item => item._id === action.payload[0]._id)
                if (existItem) {
                    existItem.quantity += action.payload[0].quantity
                }
                else {
                    state.item.push(...action.payload)
                }
            }
        },
        IncreaseCartItem: (state, action) => {
            const existItem = state.item.find(item => item._id === action.payload)
            if (existItem) {
                existItem.quantity += 1
            }
        },
        DecreaseCartItem: (state, action) => {
            const existItem = state.item.find(item => item._id === action.payload)
            if (existItem) {
                existItem.quantity -= 1
            }
        },

        toggleStatusTab: (state) => {
            state.statusTab = !state.statusTab
        },
        removeProduct: (state, action) => {
            state.item = state.item.filter((item) => item._id !== action.payload)
        }
    },
 
})

export const { addToCart, toggleStatusTab, removeProduct, IncreaseCartItem, DecreaseCartItem } = CartSlice.actions

export default CartSlice.reducer