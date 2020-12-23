import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum terminalResponse {
    portfolio = 'portfolio',
    experience = 'experience',
    openSource = 'open-source',
    resume = 'resume',
    notFound = 'not-found'
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
