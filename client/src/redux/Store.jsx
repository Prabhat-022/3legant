import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice';
import productReducer from './ProductSlice';
import cartReducer from './CartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer
  },
})