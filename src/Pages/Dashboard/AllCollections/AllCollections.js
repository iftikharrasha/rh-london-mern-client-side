import React from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Footer from '../../../Components/Footer/Footer.js';
import CollectionTable from '../../../Components/CollectionTable/CollectionTable';

const AllCollections = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <CollectionTable/>
            <Footer/>
        </>
    );
};

export default AllCollections;