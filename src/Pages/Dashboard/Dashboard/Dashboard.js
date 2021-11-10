import React from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Footer from '../../../Components/Footer/Footer.js';
import Welcome from '../../../Components/Welcome/Welcome';

const Dashboard = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <Welcome/>
            <Footer/>
        </>
    );
};

export default Dashboard;