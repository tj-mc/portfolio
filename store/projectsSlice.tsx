import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        currentProjectId: '',
    },
    reducers: {
        setCurrentProject(state, action: PayloadAction<string>) {
            state.currentProjectId = action.payload
        },
    }
})
