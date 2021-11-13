import React from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Footer from '../../../Components/Footer/Footer.js';
import Payment from '../../../Components/Payment/Payment';

const PayNow = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <Payment/>
            <Footer/>
        </>
    );
};

export default PayNow;