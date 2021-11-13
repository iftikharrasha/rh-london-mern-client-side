import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import initializeFirebase from "../Pages/Signin/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
              .then((res) => { 
                    setAuthError('');
                    const newUserInfo = { email, displayName: name, success: true };
                    setLoggedInUser(newUserInfo);

                    // save user to the database
                    saveUser(email, name, 'POST');

                    //send extra info to firebase
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
                    name: displayName
                };
                setLoggedInUser(signedInUser);

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

                //upset to database for new user
                saveUser(user.email, user.displayName, 'PUT');

                localStorage.setItem('token', accessToken);
                setAuthError('');
                const signedInUser = {
                    isSignedIn: true,
                    email: email,
                    photo: photoURL,
                    success: true,
                    name: displayName
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
                    name: name
                }
                setLoggedInUser(decodedUser);
            } else {
                setLoggedInUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [loggedInUser.email])

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

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    } 

    return {
        admin,
        isLoading,
        loggedInUser,
        registerUser,
        loginUser,
        logoutUser,
        signInWithGoogle,
        authError,
    }
}

export default useFirebase;