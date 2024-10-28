import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value:{
            cartItems: [],
            cartLength: 0,
            user: 'demo',
            total: null,
            updateAt: Date.now().toLocaleString()
        }
    },
    reducers: {
        addItem: (state,action) => {
            const productsAdded = state.value.cartItems.find(item=> item.id ===action.payload.id)
            if(!productsAdded){
                state.value.cartItems.push(action.payload)
                state.value.cartLength += 1
            }else{
                state.value.cartItems = state.value.cartItems.map(item => {
                    if(item.id == action.payload){
                        item.quiantity += action.payload.quantity
                        return item
                    }
                    return itam
                })
            }
        },
        removeItem: (state,action) => {
         state.value.cartItems = state.value.cartItems.filter(item => !item.id == action.payload) 
         state.value.cartLength -= 1
        }
    }
})

export const {addItem} = cartSlice.actions;

export default cartSlice.reducer;