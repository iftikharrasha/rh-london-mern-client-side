import React from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Footer from '../../../Components/Footer/Footer.js';
import UsersTable from '../../../Components/UsersTable/UsersTable';

const AllUsers = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <UsersTable/>
            <Footer/>
        </>
    );
};

export default AllUsers;