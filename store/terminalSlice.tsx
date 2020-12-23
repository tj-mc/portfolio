import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum terminalResponse {
    basic,
}

export type terminalSliceItem = {
    prompt: string,
    response: terminalResponse
}

export const terminalSlice = createSlice({
    name: 'counter',
    initialState: [] as Array<terminalSliceItem>,
    reducers: {
        add(state, action: PayloadAction<terminalSliceItem>) {
            state.push(
                {
                    prompt: action.payload.prompt,
                    response: action.payload.response
                }
            )
        }
    }
})
