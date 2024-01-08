import { registerWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
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

export const startCreateUserWithEmailAndPassword = ({ email, password, displayName }) => {
    console.log(email, password, displayName)
    return async (dispatch) => {
        dispatch(checkAuth());
        const result = await registerWithEmailPassword(email, password, displayName);
        console.log(result);
        if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));
        const { uid, photoURL } = result.user;

        dispatch(login(uid, displayName, email, photoURL))
    }
}