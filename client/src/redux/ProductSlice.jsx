import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../lib/axios'

const BaseUrl = "http://localhost:3000/api"
  

const initialState = {
  product: [],
  singleProduct: null,
  loading: false,
  error: null
}

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await axiosInstance.get(`${BaseUrl}/products`);
    const data = await response.data;
    return data;
  }
)

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
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
})

export const { setProduct, setSingleProduct, setLoading, setError } = ProductSlice.actions

export default ProductSlice.reducer