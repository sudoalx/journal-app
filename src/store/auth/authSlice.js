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
        login: (state, action) => {
        },
        logout: (state, payload) => {
        },
        checkAuth: (state) => {
            state.status = 'checking';
        }
    }
});

export const { login, logout, checkAuth } = authSlice.actions