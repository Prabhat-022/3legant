import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import productReducer from './productSlice'
import  cartSlice  from './cartSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    products:productReducer,
    cart: cartSlice
  },
})
