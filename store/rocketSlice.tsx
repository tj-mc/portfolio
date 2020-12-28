import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const rocketSlice = createSlice({
    name: 'rocket',
    initialState: {
        left: 0,
        top: 0,
    },
    reducers: {
        setLayout(state, action: PayloadAction<{ left: number, top: number }>) {
            state.left = action.payload.left
            state.top = action.payload.top
        },
        reset(state) {
            state.left = 0
            state.top = 0
        }
    }
})
