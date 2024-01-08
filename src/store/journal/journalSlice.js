import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: true,
    messageSaved: '',
    notes: [],
    active: null
}

export const journalSlice = createSlice({
    name: "journal",
    initialState,
    reducers: {}
});

export const { } = journalSlice.actions