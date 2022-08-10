import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice( {
    name: "ui",
    initialState: { cartShow: false, loading: false, notification: null },
    reducers: {
        toggleShowCart ( state ) {
            state.cartShow = !state.cartShow;
        },
        showNotification ( state, action ) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
} );

export const uiActions = uiSlice.actions;
export default uiSlice;