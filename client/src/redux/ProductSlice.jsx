import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [],
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    },
  },
})

export const { setProduct } = ProductSlice.actions

export default ProductSlice.reducer