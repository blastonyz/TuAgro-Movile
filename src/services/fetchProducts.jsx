
import { createAsyncThunk } from "@reduxjs/toolkit"
import { base_url } from "../url/base"

export const fetchProducts = createAsyncThunk("shop/setProducts", async () => {
    const response = await fetch(`${base_url}/products.json`)
    const data = await response.json();
    return data ? Object.values(data) : [];
})
