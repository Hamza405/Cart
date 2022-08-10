import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui_slices";

const cartSlice = createSlice( {
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        change: false
    },
    reducers: {
        replaceCart ( state, action ) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;

        },
        addItemCart ( state, action ) {
            state.change = true;
            const item = action.payload;
            const existingItem = state.items.find( i => i.id === item.id );
            state.totalQuantity++;
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
            state.change = true;
            const id = action.payload;
            console.log( id );
            const existingItem = state.items.find( i => i.id === id );
            state.totalQuantity--;
            if ( existingItem.quantity === 1 )
            {
                state.items = state.items.filter( i => i.id !== id );
            } else
            {
                existingItem.quantity--;
                // existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        }
    }
} );

export const getCartData = () => {
    return async ( dispatch ) => {
        const fetchData = async () => {
            const res = await fetch( 'https://tishreen-62882-default-rtdb.firebaseio.com/cart.json' );

            if ( !res.ok )
            {
                throw new Error( 'Some thing wrong!' );
            }
            const data = res.json();
            return data;
        };

        try
        {
            const cartData = await fetchData();
            dispatch( cartActions.replaceCart( cartData ) );
        } catch ( error )
        {
            dispatch( uiActions.showNotification( {
                status: 'error',
                title: 'Error',
                message: error.message
            } ) );
        }
    };
};

export const sendCartData = ( cart ) => {
    return async ( dispatch ) => {
        dispatch( uiActions.showNotification( {
            status: 'pending',
            title: 'Sending...',
            message: 'Sending Cart Data.'
        } ) );

        const sendHttp = async () => {
            const res = await fetch( 'https://tishreen-62882-default-rtdb.firebaseio.com/cart.json', {
                method: "PUT",
                body: JSON.stringify( cart )

            } );
            if ( !res.ok )
            {
                throw new Error( 'Some thing wrong!' );
            }
        };

        try
        {
            await sendHttp();
            dispatch( uiActions.showNotification( {
                status: 'success',
                title: 'Success',
                message: 'Send Cart Data Successfully!'
            } ) );
        } catch ( e )
        {
            sendHttp().catch( error => {
                dispatch( uiActions.showNotification( {
                    status: 'error',
                    title: 'Error',
                    message: error.message
                } ) );

            } );
        }
    };
};


export const cartActions = cartSlice.actions;
export default cartSlice;