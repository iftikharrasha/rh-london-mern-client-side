import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../img/google.svg';
import preloader from '../../img/preloader.gif';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loggedInUser, loginUser, isLoading, signInWithGoogle, authError } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    const handleNormalAuth = (event) => {
        if(loginData.email && loginData.password){
            loginUser(loginData.email, loginData.password, location, history);
        }
        event.preventDefault();
    }

    //form validation part
    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        let isFormValid;

        if(field === 'email'){
            const regexEm = /\S+@\S+\.\S+/;
            isFormValid = regexEm.test(value);
        }
      
        if(field === 'password'){
            const regexPass = /\d{1}/;
            const isPassNumber = regexPass.test(value);
            const isPassLength = value.length > 6;
      
            isFormValid = isPassLength && isPassNumber;
        }
          
        if(isFormValid){
            const newUserInfo = {...loginData};
            newUserInfo[field] = value;
            setLoginData(newUserInfo);
        }
    }

    return (
        <>
            <section className="login">
                <div className="text-center mb-3">
                    {
                        authError && <p style={{color: 'red'}}> Please Create an account first!</p>
                    }
                    {
                        loggedInUser.success && <p>Account Created Successfully, Please Login!</p>
                    }
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="login-form bg-tag-1">
                        <div className="text-center">
                            <h2 className="mt-3 text-center reg-28">Dashboard Login
                            </h2>
                        </div>

                        {
                        
                        !isLoading &&  <form className="form" onSubmit={handleNormalAuth}>
                                            <div className="inputs my-4">
                                                <div className="input-field">
                                                    <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit--14" type="text" name="email" onBlur={handleOnBlur} placeholder="Enter Email" autoComplete="on" required/>
                                                    <div className="input-icon">
                                                        <i className="fa fa-envelope i-envelope" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div className="input-field my-3">
                                                    <input type="password" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="password" onBlur={handleOnBlur} placeholder="Enter Password" autoComplete="on" required/>
                                                    <div className="input-icon">
                                                        <i className="fa fa-key i-key" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <button className="signin-btn">Sign In
                                                </button>
                                            </div>
                                            <div className="mt-4 text-center lit--14 below">Don't have any account?
                                                <Link to="/signup" className="ml-1"> <u>Sign Up</u>
                                                </Link>
                                            </div>
                                        </form>
                        }

                        {
                            isLoading &&    <div className="loader">
                                                <img src={preloader} alt={preloader} className="img-fluid"/>
                                            </div>
                        }
                    </div>
                </div>

                <Container className="mt-5">
                    <Row>
                        <Col md={12} className="text-center">
                            <div className="social-login d-block">
                                <button onClick={handleGoogleSignIn}>
                                    <img src={google} alt="google"/>
                                    <span className="ml-2">Continue with Google</span> 
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Login;