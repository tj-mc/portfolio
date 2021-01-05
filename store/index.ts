import {terminalSlice} from "./terminalSlice";
import {configureStore} from "@reduxjs/toolkit";
import {rocketSlice} from "./rocketSlice";
import {fontLoadSlice} from "./fontLoadSlice";
import {modalSlice} from "./modalSlice";

export const store = configureStore({
    reducer: {
        fontLoad: fontLoadSlice.reducer,
        terminal: terminalSlice.reducer,
        rocket: rocketSlice.reducer,
        modal: modalSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
