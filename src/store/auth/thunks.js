import { signInWithGoogle } from "../../firebase/providers";
import { checkAuth, login, logout } from "./";

export const checkingAuth = (email, password) => {
    return async (dispatch) => {
        dispatch(checkAuth());
    }
}

export const startGoogleLogin = () => {
    return async (dispatch) => {
        dispatch(checkAuth());
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

        dispatch(login(result))
    }
}