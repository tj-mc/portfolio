import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const publicationsSlice = createSlice({
    name: 'publications',
    initialState: [] as Array<any>,
    reducers: {
        set(state, action: PayloadAction<any>) {
            state.push(...action.payload)
        }
    }
})
