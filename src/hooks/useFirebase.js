import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import initializeFirebase from "../Pages/Signin/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, getIdToken, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    // const getDecodedUser = () => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         return {
    //             isSignedIn: false,
    //             name: '',
    //             email: '',
    //             photo: '',
    //             success: false,
    //             error: ''
    //         };
    //     }
    //     const {name, email, picture} = jwt_decode(token);
    //     const decodedUser = {
    //         isSignedIn: true,
    //         email: email,
    //         photo: picture,
    //         success: true,
    //         name: (name.split(' '))[0]
    //     }
    //     return decodedUser;
    // }

    const [loggedInUser, setLoggedInUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
              .then((res) => { 
                    setAuthError('');
                    const newUserInfo = { email, displayName: name, success: true };
                    setLoggedInUser(newUserInfo);
                    // send name to firebase after creation
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XZtZr6e_zPRkbWX6o9S-KeNbUbzgw9qWDA&usqp=CAU'
                    }).then(() => {
                    }).catch((error) => {
                    });
                    const destination = location?.state?.from || '/login';
                    history.replace(destination);
              })
              .catch((error) => {
                    setAuthError(error.message);
              })
              .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user);
                const user = res.user;
                const {displayName, email, accessToken} = user;
                localStorage.setItem('token', accessToken);
                setAuthError('');
                const signedInUser = {
                    isSignedIn: true,
                    email: email,
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XZtZr6e_zPRkbWX6o9S-KeNbUbzgw9qWDA&usqp=CAU',
                    success: true,
                    name: (displayName.split(' '))[0]
                };
                setLoggedInUser(signedInUser);
                // setUserToken();
                // send name to firebase after creation
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
                const user = result.user;
                const {displayName, email, photoURL, accessToken} = user;
                localStorage.setItem('token', accessToken);
                setAuthError('');
                const signedInUser = {
                    isSignedIn: true,
                    email: email,
                    photo: photoURL,
                    success: true,
                    name: (displayName.split(' '))[0]
                };
                // setAuthToken();
                setLoggedInUser(signedInUser);
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // const setAuthToken = () => {
    //     getIdToken(true).then(function(idToken) {
    //         localStorage.setItem('token', idToken);
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (loggedInUser) => {
            const token = localStorage.getItem('token');
            if(token) {
                const {name, email, picture} = jwt_decode(token);
                const decodedUser = {
                    isSignedIn: true,
                    email: email,
                    photo: picture,
                    success: true,
                    name: (name.split(' '))[0]
                }
                setLoggedInUser(decodedUser);
            } else {
                setLoggedInUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logoutUser = () => {
        setIsLoading(true);
        signOut(auth).then((res) => {
            localStorage.removeItem('token');
            setLoggedInUser({})
        }).catch((error) => {
            console.log(error);
        })
        .finally(() => setIsLoading(false));
    }

    return {
        isLoading,
        token,
        loggedInUser,
        registerUser,
        loginUser,
        logoutUser,
        signInWithGoogle,
        authError,
    }
}

export default useFirebase;