import { authSlice, checkAuth } from "./authSlice";

export const checkingAuth = (email, password) => async (dispatch) => {
    return async (dispatch) => {
        dispatch(checkAuth());
    }
}

export const startGoogleLogin = () => async (dispatch) => {
    return async (dispatch) => {
        dispatch(checkAuth());
    }
}