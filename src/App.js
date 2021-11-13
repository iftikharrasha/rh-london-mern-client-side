import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import Home from './Pages/Home/Home.js';
import Signin from './Pages/Signin/Signin/Signin.js';
import Signup from './Pages/Signup/Signup.js';
import ExploreAll from './Pages/ExploreAll/ExploreAll.js';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails.js';
import NotFound from './Pages/NotFound/NotFound.js';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard.js';
import AllCollections from './Pages/Dashboard/AllCollections/AllCollections.js';
import AddCollections from './Pages/Dashboard/AddCollections/AddCollections.js';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders.js';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sass/style.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider.js';
import AllReviews from './Pages/Dashboard/AllReviews/AllReviews.js';
import AddReviews from './Pages/Dashboard/AddReviews/AddReviews.js';

// export const UserContext = createContext(); //from authprovider

function App() {
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
                                <PrivateRoute path="/service-details/:orderId">
                                    <ServiceDetails/>
                                </PrivateRoute>
                                <PrivateRoute path="/dashboard">
                                    <Dashboard/>
                                </PrivateRoute>
                                <PrivateRoute path="/all-collections">
                                    <AllCollections/>
                                </PrivateRoute>
                                <PrivateRoute path="/add-collections">
                                    <AddCollections/>
                                </PrivateRoute>
                                <PrivateRoute path="/manage-orders">
                                    <ManageOrders/>
                                </PrivateRoute>
                                <PrivateRoute path="/all-reviews">
                                   <AllReviews/>
                                </PrivateRoute>
                                <PrivateRoute path="/add-review">
                                   <AddReviews/>
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
