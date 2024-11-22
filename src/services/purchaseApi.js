import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react";
import { base_url } from "../url/base";

export const purchaseApi = createApi({
    reducerPath: "purchaseApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        postPurchase: builder.mutation({
            query: ({...purchase}) => ({
                url: 'purchases.json',
                method: 'POST',
                body: purchase 
            }),  
        }),
        getPurchases: builder.query({
            query:(user) =>  `purchases.json?orderBy="user"&equalTo="${encodeURIComponent(user)}"`,
            transformResponse: (response) => {
               
                return response
                    ? Object.values(response).map(item => ({
                        cartItems: item.cartItems,
                        createdAt: item.createdAt,
                        total: item.total
                    }))
                    : [];
            }
        })  
    })
})

export const { usePostPurchaseMutation, useGetPurchasesQuery } = purchaseApi;
