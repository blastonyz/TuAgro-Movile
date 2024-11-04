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
            })
        })
    })
})

export const { usePostPurchaseMutation } = purchaseApi;
