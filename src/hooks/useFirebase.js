import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import initializeFirebase from "../Pages/Signin/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, getIdToken, signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const getDecodedUser = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                tokenId: '',
                success: false,
                error: ''
            };
        }
        const {name, email, picture} = jwt_decode(token);
        const uidDecoded = localStorage.getItem('uid');
        const unameDecoded = localStorage.getItem('uname');
        const decodedUser = {
            isSignedIn: true,
            email: email,
            photo: picture,
            tokenId: uidDecoded || unameDecoded,
            success: true,
            name: (name.split(' '))[0]
        }
        return decodedUser;
    }

    const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
    const [token, setToken] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
              .then((res) => { 
                    const newUserInfo = {...loggedInUser};
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    history.replace('/');
              })
              .catch((error) => {
                    const newUserInfo = {...loggedInUser};
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
              })
              .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = '';
                newUserInfo.isSignedIn = true;
                newUserInfo.success = true;
                newUserInfo.photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XZtZr6e_zPRkbWX6o9S-KeNbUbzgw9qWDA&usqp=CAU';
                newUserInfo.name = 'John Doe';

                setLoggedInUser(newUserInfo);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // console.log('Signed in user info', loggedInUser);
            })
            .catch((error) => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo);
            })
            .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (loggedInUser) => {
            if (loggedInUser) {
                setLoggedInUser(loggedInUser);
                getIdToken(loggedInUser)
                    .then(idToken => {
                        setToken(idToken);
                    })
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
            localStorage.removeItem('uid');
            localStorage.removeItem('uname');
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                tokenId: '',
                success: false,
                error: ''
              }
              setLoggedInUser(signedOutUser);
        }).catch((error) => {
            console.log(error);
        })
        .finally(() => setIsLoading(false));
    }

    return {
        isLoading,
        loggedInUser,
        registerUser,
        loginUser,
        logoutUser,
    }
}

export default useFirebase;