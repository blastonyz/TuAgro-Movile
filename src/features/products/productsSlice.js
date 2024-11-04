import { createSlice } from "@reduxjs/toolkit";
//import { fetchProducts } from "../../services/fetchProducts";

export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        value: {
            categorySelected: "",
            productId: null
        }
    },
    reducers: {
        setCategory: (state, action) => {
          
            state.value.categorySelected = action.payload
        },
      
        setProductId: (state, action) => {
            state.value.productId = action.payload;
        }
    },
    /* extraReducers: (builder) => {
         builder.addCase(fetchProducts.fulfilled, (state, action) => {
             state.value.products = action.payload;
         });
     }*/
})

export const { setCategory, setProducts, setProductId } = productsSlice.actions;

export default productsSlice.reducer;