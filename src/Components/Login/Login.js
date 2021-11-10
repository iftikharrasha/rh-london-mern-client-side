import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../img/google.svg';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase.config";

import {UserContext} from "../../App";

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);

    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
    //google sign in auth
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            const {displayName, email, photoURL, uid} = user;
            console.log(user);
            const signedInUser = {
                isSignedIn: true,
                email: email,
                photo: photoURL,
                tokenId: uid,
                success: true,
                name: (displayName.split(' '))[0]
            };

            setLoggedInUser(signedInUser);
            localStorage.setItem('uid', signedInUser.tokenId);
            setUserToken();
            history.replace(from);
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            localStorage.setItem('token', idToken);
            // console.log(idToken);
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleNormalAuth = (event) => {
        if(!newUser && loggedInUser.email && loggedInUser.password){
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
              .then((res) => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = '';
                newUserInfo.isSignedIn = true;
                newUserInfo.success = true;
                newUserInfo.photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XZtZr6e_zPRkbWX6o9S-KeNbUbzgw9qWDA&usqp=CAU';
                newUserInfo.name = 'John Doe';

                setLoggedInUser(newUserInfo);
                history.replace(from);
                // console.log('Signed in user info', loggedInUser);
              })
              .catch((error) => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo);
              });
        }
        event.preventDefault();
    }

    //form validation part
    const handleBlur = (event) => {
        // console.log(event.target.name, event.target.value);

        let isFormValid;
        if(event.target.name === 'email'){
            const regexEm = /\S+@\S+\.\S+/;
            isFormValid = regexEm.test(event.target.value);
            // console.log(isFormValid);
        }
      
        if(event.target.name === 'password'){
            const regexPass = /\d{1}/;
            const isPassNumber = regexPass.test(event.target.value);
            const isPassLength = event.target.value.length > 6;
      
            isFormValid = isPassLength && isPassNumber;
            // console.log(isFormValid);
        }
          
        if(isFormValid){
            const newUserInfo = {...loggedInUser};
            newUserInfo[event.target.name] = event.target.value;
            setLoggedInUser(newUserInfo);
            localStorage.setItem('uname', newUserInfo.email);
        }
    }

    return (
        <>
            <section className="login">
                <div className="text-center mb-3">
                    <p style={{color: 'red'}}>{loggedInUser.error}</p>
                    { loggedInUser.success && <p>Account Created Successfully!</p> }
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="login-form bg-tag-1">
                        <div className="text-center">
                            <h2 className="mt-3 text-center reg-28">Login to 
                                <b className="font-bold"> Island
                                </b>
                            </h2>
                        </div>
                        <form className="form" onSubmit={handleNormalAuth}>
                            <div className="inputs my-4">
                                <div className="input-field">
                                    <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit--14" type="text" name="email" onChange={handleBlur} placeholder="Enter Email" autoComplete="on" required/>
                                    <div className="input-icon">
                                        <i className="fa fa-envelope i-envelope" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="input-field my-3">
                                    <input type="password" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="password" onChange={handleBlur} placeholder="Enter Password" autoComplete="on" required/>
                                    <div className="input-icon">
                                        <i className="fa fa-key i-key" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="signin-btn">Sign In
                                </button>
                            </div>
                            <div className="mt-4 text-center lit--14">Don't have any account?
                                <Link to="/signup" className="ml-1"> <u>Sign Up</u>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                <Container className="mt-5">
                    <Row>
                        <Col md={4} className="offset-md-4">
                            <Row>
                                <Col md={12}>
                                    <div className="social-login d-block">
                                        <button onClick={handleGoogleSignIn}>
                                            <img src={google} alt="google"/>
                                            <span className="ml-2">Continue with Google</span> 
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Login;