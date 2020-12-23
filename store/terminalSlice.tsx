import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import React, {ReactComponentElement} from "react";

type terminalArrayItem = {
    prompt: string,
    response: ReactComponentElement<any>
}

export const terminalSlice = createSlice({
    name: 'counter',
    initialState: [] as Array<terminalArrayItem>,
    reducers: {
        add(state, action: PayloadAction<terminalArrayItem>) {
            state.push(
                {
                    prompt: action.payload.prompt,
                    response: action.payload.response
                }
            )
        }
    }
})
