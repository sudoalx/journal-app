import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

const provider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    const auth = FirebaseAuth;
    try {
        console.log("signing in with google")
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            // user info
            displayName, email, photoURL, uid,
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        return {
            ok: false,
            errorCode, errorMessage, email, credential
        }
    }
}

export const signInWithEmailPassword = async (email, password) => {
    const auth = FirebaseAuth;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const { uid, photoURL } = userCredential.user;
        const user = userCredential.user;

        return {
            ok: true,
            user
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode, errorMessage
        }
    }
}

export const registerWithEmailPassword = async (email, password, displayName) => {
    const auth = FirebaseAuth;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const { uid, photoURL } = userCredential.user;
        const user = userCredential.user;

        // TODO: update user profile with displayName in firebase
        await updateProfile(FirebaseAuth.currentUser, {
            displayName,
        })
        return {
            ok: true,
            user
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode, errorMessage
        }
    }
}