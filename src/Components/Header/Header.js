import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/compat/app";
import logo from '../../img/logo.png';
import logout from '../../img/logout.svg';

import {UserContext} from "../../App";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then((res) => {
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
        });
      }

        const [scroll, setScroll] = useState(false);
        useEffect(() => {
            window.addEventListener('scroll', () => {
                const scrollHeight = window.scrollY;
                setScroll(scrollHeight > 50);
            })
        }, []);

        const activeToggle = e => {
            document.getElementById('header').classList.toggle('open');
            e.preventDefault();
        }

    return (
        <>
            <header className={scroll ? "header py-4 px-sm-5 px-4 fixed-header" : "header py-4 px-sm-5 px-4"} id="header">
                <nav className="nav-left">
                    <div className="left-menu">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/explore">Explore</Link></li>
                        </ul>
                    </div>
                </nav>

                <div className="logo">
                    {/* <Link to="/home">RH LONDON</Link> */}
                    <Link to="/home"><img src={logo} alt={logo} className="img-fluid"/></Link>
                </div>

                <nav className="nav-right">
                    <div className="right-menu">
                        {
                            loggedInUser.isSignedIn ?   <ul>
                                                            <li>
                                                                <Link to="/dashboard">
                                                                    <span className="avatar mr-2">
                                                                        <img alt={loggedInUser.name} src={loggedInUser.photo}/>
                                                                    </span>
                                                                    <span className="mb-0">{loggedInUser.name}</span>
                                                                </Link>
                                                            </li>
                                                            <li><Link to="/dashboard">Dashboard</Link></li>
                                                            <li><Link to="/" onClick={handleSignOut}>Logout <img src={logout} alt={logout} className="img-fluid ml-2"/></Link></li>
                                                        </ul>

                                                    :   <ul>
                                                            <li><Link to="/signup">Create Account</Link></li>
                                                            <li><Link to="/login">Sign In</Link></li>
                                                        </ul>
                        }
                    </div>
                </nav>

                <div className="mobile-design desktop-hidden">
                    <a className="nav-toggle" onClick={activeToggle}>
                        <span className="top"></span>
                        <span className="mid"></span>
                        <span className="bot"></span>
                    </a>

                    <div className="nav-full">
                        {
                            loggedInUser.isSignedIn ?   <ul>
                                                            <li><Link to="/home">Home</Link></li>
                                                            <li><Link to="/explore">Explore</Link></li>
                                                            <li>
                                                                <Link to="/dashboard">
                                                                    <span className="avatar mr-2">
                                                                        <img alt={loggedInUser.name} src={loggedInUser.photo}/>
                                                                    </span>
                                                                    <span className="mb-0">{loggedInUser.name}</span>
                                                                </Link>
                                                            </li>
                                                            <li><Link to="/dashboard">Dashboard</Link></li>
                                                            <li><Link to="/" onClick={handleSignOut}>Logout</Link></li>
                                                        </ul>
                                                        
                                                    :   <ul>
                                                            <li><Link to="/home">Home</Link></li>
                                                            <li><Link to="/explore">Explore</Link></li>
                                                            <li><Link to="/signup">Create Account</Link></li>
                                                            <li><Link to="/login">Sign In</Link></li>
                                                        </ul>
                        }
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;