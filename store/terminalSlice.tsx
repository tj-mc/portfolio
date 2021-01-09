import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {standardTerminalResponse} from "../func/terminal/standardTerminalResponse";

export type terminalSliceItem = {
    prompt: string,
    response: standardTerminalResponse
}

export const terminalSlice = createSlice({
    name: 'terminal',
    initialState: [] as Array<terminalSliceItem>,
    // initialState: [{prompt: 'Test', response: terminalResponse.skills}] as Array<terminalSliceItem>,
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
