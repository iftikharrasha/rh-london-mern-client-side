import React from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Footer from '../../../Components/Footer/Footer.js';
import AdminForm from '../../../Components/AdminForm/AdminForm';

const AddAdmin = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <AdminForm/>
            <Footer/>
        </>
    );
};

export default AddAdmin;