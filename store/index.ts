import {terminalSlice} from "./terminalSlice";
import {configureStore} from "@reduxjs/toolkit";
import {rocketSlice} from "./rocketSlice";

export const store = configureStore({
    reducer: {
        terminal: terminalSlice.reducer,
        rocket: rocketSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
