import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers:{
        addItem : (state, action)=>{
            state.items.push(action.payload);
            // these functions didnot return anything they takes states and directlt modifies it
        },
        clearCart : (state)=>{
            state.items = [];
        },
        removeItem : (state , action)=>{
            state.items.pop();
        },
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer ;