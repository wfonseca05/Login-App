import { createUserWithEmailAndPassword, updateProfile,  getAuth, signInWithPopup, signInWithEmailAndPassword  } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(
                    Login(user.uid, user.displayName)
                )
            }).catch((error) => {
                console.log(error)
            })

    }
}

export const startRegisterWhitEmailPasswordName = (email, password, fullName) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ( {user} ) => {
                await updateProfile( user, {displayName: fullName});
                dispatch(Login(user.uid, user.displayName))

                console.log(user)
            }).catch( e => {
                console.log(e)
            });
    }

}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) => {
                dispatch(Login(user.uid, user.displayName))
            })
    }
}

export const Login = (uid, displayName) => ({

        type: types.login,
        payload: {
            uid,
            displayName,
        }

})
