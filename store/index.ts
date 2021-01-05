import {terminalSlice} from "./terminalSlice";
import {configureStore} from "@reduxjs/toolkit";
import {rocketSlice} from "./rocketSlice";
import {fontLoadSlice} from "./fontLoadSlice";
import {modalSlice} from "./modalSlice";
import {publicationsSlice} from "./publicationsSlice";

export const store = configureStore({
    reducer: {
        fontLoad: fontLoadSlice.reducer,
        terminal: terminalSlice.reducer,
        rocket: rocketSlice.reducer,
        modal: modalSlice.reducer,
        publications: publicationsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
