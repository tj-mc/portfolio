import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum terminalResponse {
    portfolio = 'portfolio',
    blog = 'blog',
    openSource = 'open-source',
    resume = 'resume',
    notFound = 'not-found',
    skills = 'skills'
}

export type terminalSliceItem = {
    prompt: string,
    response: terminalResponse
}

export const terminalSlice = createSlice({
    name: 'terminal',
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
