import { React, createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import ScrollToTop from './ScrollToTop.js';
import Home from './Pages/Home/Home.js';
import Singin from './Pages/Singin/Singin.js';
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
                                    <Home/>
                                </Route>
                                <Route path="/home">
                                    <Home/>
                                </Route>
                                <Route path="/login">
                                    <Singin/>
                                </Route>
                                <Route path="/signup">
                                    <Signup/>
                                </Route>
                                <PrivateRoute path="/dashboard">
                                    <Dashboard/>
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
            </UserContext.Provider>

        </div>
    );
    }

export default App;
