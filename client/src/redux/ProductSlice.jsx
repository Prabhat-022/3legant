import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [],
  singleProduct: null,
  loading: false,
  error: null
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    },
    setSingleProduct: (state, action) => {
      state.product.map((product) => {
        if (product._id === action.payload._id) {
          state.singleProduct = product
        }
      })
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  },
})

export const { setProduct, setSingleProduct, setLoading, setError } = ProductSlice.actions

export default ProductSlice.reducer