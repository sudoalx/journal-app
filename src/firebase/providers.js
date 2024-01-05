import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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