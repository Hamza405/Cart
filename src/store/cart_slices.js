import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice( {
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addItemCart ( state, action ) {

        },
        removeItemCart ( state, action ) { }
    }
} );