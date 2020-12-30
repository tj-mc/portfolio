import {terminalSlice} from "./terminalSlice";
import {configureStore} from "@reduxjs/toolkit";
import {rocketSlice} from "./rocketSlice";
import {fontLoadSlice} from "./fontLoadSlice";

export const store = configureStore({
    reducer: {
        fontLoad: fontLoadSlice.reducer,
        terminal: terminalSlice.reducer,
        rocket: rocketSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
