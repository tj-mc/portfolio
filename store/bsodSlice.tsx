import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const bsodSlice = createSlice({
    name: 'bsod',
    initialState: {
        visible: false,
    },
    reducers: {
        setVisible(state, action: PayloadAction<boolean>) {
            state.visible = action.payload
        },
    }
})
