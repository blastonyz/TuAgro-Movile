import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import  productsReducer  from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice.js"
import productsApi from "../services/productsApi.js";
import {purchaseApi}  from "../services/purchaseApi.js";
import { authApi } from "../services/authApi.js";
import { userApi } from "../services/userApi.js";



export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        cart: cartReducer,
        [productsApi.reducerPath] : productsApi.reducer,
        [purchaseApi.reducerPath] : purchaseApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
        [userApi.reducerPath] : userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware).concat(purchaseApi.middleware).concat(authApi.middleware).concat(userApi.middleware)
    
})