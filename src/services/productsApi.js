import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { base_url } from '../url/base'

const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
        getProducts: builder.query({
            query: () => 'products.json'
        }),
        getProductsByCategory: builder.query({
            query: (category)=>{
                return(
                `products.json?orderBy="category"&equalTo="${category}"` //Strings literal
            )},
            transformResponse: (response) => ( 
                response ? Object.values(response): []
            )
        }),
        getProduct: builder.query({
            query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
            
            transformResponse: (response) => (
                response ? Object.values(response)[0] : null
            )
        })
    })
})
//console.log(productsApi);

export const {useGetCategoriesQuery, useGetProductsQuery,useGetProductsByCategoryQuery, useGetProductQuery} = productsApi;
export default productsApi;