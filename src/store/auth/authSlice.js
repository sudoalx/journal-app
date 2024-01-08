import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'not-authenticated', // checking, authenticated, checking
    uuid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uuid = payload.uuid
            state.email = payload.email
            state.displayName = payload.displayName
            state.photoURL = payload.photoURL
            state.errorMessage = payload.errorMessage
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.uuid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;
        },
        checkAuth: (state) => {
            state.status = 'checking';
        }
    }
});

export const { login, logout, checkAuth } = authSlice.actions