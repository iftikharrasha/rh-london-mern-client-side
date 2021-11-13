import React from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Footer from '../../../Components/Footer/Footer.js';
import ReviewsTable from '../../../Components/ReviewsTable/ReviewsTable';

const AllReviews = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <ReviewsTable/>
            <Footer/>
        </>
    );
};

export default AllReviews;