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
            const item = action.payload;
            const existingItem = state.items.find( i => i.id === item.id );
            if ( !existingItem )
            {
                state.items.push( {
                    id: item.id,
                    title: item.title,
                    quantity: 1,
                    price: item.price,
                    totalPrice: item.price,

                } );
            } else
            {
                existingItem.quantity++;
                existingItem.price = existingItem.totalPrice + existingItem.price;
            }

        },
        removeItemCart ( state, action ) {
            const id = action.payload;
            const existingItem = state.items.find( i => i.id === id );
            if ( existingItem.quantity === 1 )
            {
                state.items = state.items.filter( i => i !== id );
            } else
            {
                existingItem--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        }
    }
} );

export const cartActions = cartSlice.actions;
export default cartSlice;