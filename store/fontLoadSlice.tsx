import {createSlice} from "@reduxjs/toolkit";

export const fontLoadSlice = createSlice({
    name: 'fontLoad',
    initialState: {
        ready: false
    },
    reducers: {
        ready(state) {
            state.ready = true
        }
    }
})
