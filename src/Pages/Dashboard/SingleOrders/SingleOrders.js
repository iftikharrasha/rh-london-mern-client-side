import React from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Footer from '../../../Components/Footer/Footer.js';
import MyOrders from '../../../Components/MyOrders/MyOrders';

const SingleOrders = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <MyOrders/>
            <Footer/>
        </>
    );
};

export default SingleOrders;