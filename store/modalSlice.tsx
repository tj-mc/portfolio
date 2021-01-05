import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'rocket',
    initialState: {
        contactVisible: false
    },
    reducers: {
        setContactVisible(state, action: PayloadAction<boolean>) {
            state.contactVisible = action.payload
        },
    }
})
