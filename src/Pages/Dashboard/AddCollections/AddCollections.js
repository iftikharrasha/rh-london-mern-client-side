import React from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Footer from '../../../Components/Footer/Footer.js';
import CollectionForm from '../../../Components/CollectionForm/CollectionForm';

const AddCollections = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <CollectionForm/>
            <Footer/>
        </>
    );
};

export default AddCollections;