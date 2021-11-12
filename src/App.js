import { React, createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import ScrollToTop from './ScrollToTop.js';
import Home from './Pages/Home/Home.js';
import Signin from './Pages/Signin/Signin/Signin.js';
import Signup from './Pages/Signup/Signup.js';
import NotFound from './Pages/NotFound/NotFound.js';

import Offers from './Components/Offers/Offers.js';
import MyOrders from './Components/MyOrders/MyOrders.js';
import AllOrders from './Components/AllOrders/AllOrders.js';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder.js';
import AddOffer from './Components/AddOffer/AddOffer.js';
import AllOffers from './Components/AllOffers/AllOffers.js';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sass/style.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard.js';
import AllCollections from './Pages/Dashboard/AllCollections/AllCollections.js';
import AddCollections from './Pages/Dashboard/AddCollections/AddCollections.js';
import ExploreAll from './Pages/ExploreAll/ExploreAll.js';
import AuthProvider from './contexts/AuthProvider/AuthProvider.js';

// export const UserContext = createContext(); //from authprovider

function App() {
    // const getDecodedUser = () => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         return {
    //             isSignedIn: false,
    //             name: '',
    //             email: '',
    //             photo: '',
    //             tokenId: '',
    //             success: false,
    //             error: ''
    //         };
    //     }
    //     const {name, email, picture} = jwt_decode(token);
    //     const uidDecoded = localStorage.getItem('uid');
    //     const unameDecoded = localStorage.getItem('uname');
    //     const decodedUser = {
    //         isSignedIn: true,
    //         email: email,
    //         photo: picture,
    //         tokenId: uidDecoded || unameDecoded,
    //         success: true,
    //         name: (name.split(' '))[0]
    //     }
    //     return decodedUser;
    // }

    // const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());

    return (
        <div className="App">

            <AuthProvider>
                <Router>
                    <ScrollToTop>
                        <Route render={({location}) => (
                            <Switch location={location}>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route path="/home">
                                    <Home/>
                                </Route>
                                <Route path="/login">
                                    <Signin/>
                                </Route>
                                <Route path="/signup">
                                    <Signup/>
                                </Route>
                                <Route path="/explore">
                                    <ExploreAll/>
                                </Route>
                                <PrivateRoute path="/dashboard">
                                    <Dashboard/>
                                </PrivateRoute>
                                <PrivateRoute path="/all-collections">
                                    <AllCollections/>
                                </PrivateRoute>
                                <PrivateRoute path="/add-collections">
                                    <AddCollections/>
                                </PrivateRoute>
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
            </AuthProvider>

        </div>
    );
    }

export default App;
