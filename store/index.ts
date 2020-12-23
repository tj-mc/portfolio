import {terminalSlice} from "./terminalSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        terminal: terminalSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
