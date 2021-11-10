import { React, createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import jwt_decode from "jwt-decode";
import Header from './Components/Header/Header.js';
import Hero from './Components/Hero/Hero.js';
import MediaPartners from './Components/MediaPartners/MediaPartners.js';
import Features from './Components/Features/Features.js';
import Imagination from './Components/Imagination/Imagination.js';
import Collections from './Components/Collections/Collections.js';
import Offers from './Components/Offers/Offers.js';
import Intro from './Components/Intro/Intro.js';
import MyOrders from './Components/MyOrders/MyOrders.js';
import AllOrders from './Components/AllOrders/AllOrders.js';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder.js';
import AddOffer from './Components/AddOffer/AddOffer.js';
import Login from './Components/Login/Login.js';
import SignUp from './Components/SignUp/SignUp.js';
import Footer from './Components/Footer/Footer.js';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sass/style.css';
import AllOffers from './Components/AllOffers/AllOffers.js';

export const UserContext = createContext();

function App() {
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

    return (
        <div className="App">

            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <ScrollToTop>
                        <Route render={({location}) => (
                            <Switch location={location}>
                                <Route exact path="/">
                                    <Header/>
                                    <Hero/>
                                    <MediaPartners/>
                                    <Intro/>
                                    <Features/>
                                    <Collections/>
                                    <Imagination/>
                                    <Footer/>
                                    {/* <Offers/>*/}
                                </Route>
                                <Route path="/home">
                                    <Header/>
                                    <Hero/>
                                    <MediaPartners/>
                                    <Intro/>
                                    <Features/>
                                    <Collections/>
                                    <Imagination/>
                                    <Footer/>
                                    {/* <Offers/>*/}
                                </Route>
                                <Route path="/login">
                                    <Header/>
                                    <Login/>
                                    <Footer/>
                                </Route>
                                <Route path="/signup">
                                    <Header/>
                                    <SignUp/>
                                    <Footer/>
                                </Route>
                                {/* <Route path="/all-offers">
                                    <Header/>
                                    <AllOffers/>
                                    <Footer/>
                                </Route>
                                <PrivateRoute path="/all-orders">
                                    <Header/>
                                    <AllOrders/>
                                    <Footer/>
                                </PrivateRoute>
                                <PrivateRoute path="/my-orders/:orderOwner">
                                    <Header/>
                                    <MyOrders/>
                                    <Footer/>
                                </PrivateRoute>
                                <PrivateRoute path="/place-order/:orderId">
                                    <Header/>
                                    <PlaceOrder/>
                                    <Footer/>
                                </PrivateRoute>
                                <PrivateRoute path="/add-offers/:addedBy">
                                    <Header/>
                                    <AddOffer/>
                                    <Footer/>
                                </PrivateRoute> */}
                                <Route path="*">
                                    <NotFound/>
                                </Route>
                            </Switch>
                        )} />
                    </ScrollToTop>
                </Router>
            </UserContext.Provider>

        </div>
    );
    }

export default App;
