import React from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Footer from '../../../Components/Footer/Footer.js';
import ReviewForm from '../../../Components/ReviewForm/ReviewForm';

const AddReviews = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <ReviewForm/>
            <Footer/>
        </>
    );
};

export default AddReviews;