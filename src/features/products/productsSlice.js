import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/fetchProducts";
//import { useSelector } from "react-redux";
export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        value: {
            products: [],
            categorySelected: "",
            categoryProducts:[],
            productId: null
        }
    },
    reducers: {
        setCategory: (state,action ) => {
            state.value.categoryProducts = state.value.products.filter(product=>product.category === action.payload)
            state.value.categorySelected = action.payload 
        },
        setProducts: (state,action) => {
            state.value.products = action.payload;
        },
        setProductId: (state,action) => {
            state.value.productId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.value.products = action.payload;
        });
    }
})

export const {setCategory, setProducts, setProductId} = productsSlice.actions;

export default productsSlice.reducer;