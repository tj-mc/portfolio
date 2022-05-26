import {terminalSlice} from "./terminalSlice";
import {configureStore} from "@reduxjs/toolkit";
import {fontLoadSlice} from "./fontLoadSlice";
import {modalSlice} from "./modalSlice";
import {publicationsSlice} from "./publicationsSlice";
import {bsodSlice} from "./bsodSlice";
import {projectsSlice} from "./projectsSlice";

export const store = configureStore({
    reducer: {
        projects: projectsSlice.reducer,
        bsod: bsodSlice.reducer,
        fontLoad: fontLoadSlice.reducer,
        terminal: terminalSlice.reducer,
        modal: modalSlice.reducer,
        publications: publicationsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
