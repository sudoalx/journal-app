import { logoutFirebase, registerWithEmailPassword, signInWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
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

export const startLoginWithEmailAndPassword = ({ email, password }) => {
    console.log(email, password)
    return async (dispatch) => {
        dispatch(checkAuth());
        const result = await signInWithEmailPassword(email, password);
        if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));
        const { uid, photoURL, displayName } = result.user;

        dispatch(login(uid, displayName, email, photoURL))
        console.log(result);
    }
}

export const startCreateUserWithEmailAndPassword = ({ email, password, displayName }) => {
    console.log(email, password, displayName)
    return async (dispatch) => {
        dispatch(checkAuth());
        const result = await registerWithEmailPassword(email, password, displayName);
        if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));
        const { uid, photoURL } = result.user;

        dispatch(login(uid, displayName, email, photoURL))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase()
        dispatch(logout())
    }
}