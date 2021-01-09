import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'rocket',
    initialState: {
        contactVisible: false,
        messageVisible: false,
        message: 'Thanks!\nTalk to you soon!'
    },
    reducers: {
        setContactVisible(state, action: PayloadAction<boolean>) {
            state.contactVisible = action.payload
        },
        setMessageVisible(state, action: PayloadAction<boolean>) {
            state.messageVisible = action.payload
        },
        setMessage(state, action: PayloadAction<string>) {
            state.message = action.payload
        },
    }
})
