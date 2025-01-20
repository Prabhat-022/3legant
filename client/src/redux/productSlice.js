import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",

    initialState: {
        product: [],
        singleProduct: null,
        
    },

    reducers: {
        setAllProducts: (state, action) => {
            state.product = action.payload
        },
        setSingleProduct: (state, action) => {
            state.singleProduct = action.payload
        },

    },
});

export const { setAllProducts , setSingleProduct} = productSlice.actions;
export default productSlice.reducer;