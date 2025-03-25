import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: [],
    statusTab: false
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

        toggleStatusTab: (state) => {
            state.statusTab = !state.statusTab
        },
        removeProduct: (state, action) => {
            state.item = state.item.filter((item) => item._id !== action.payload)
        }
    },
})

export const { addToCart, toggleStatusTab, removeProduct } = CartSlice.actions

export default CartSlice.reducer