import React from 'react';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero.js';
import MediaPartners from '../../Components/MediaPartners/MediaPartners.js';
import Features from '../../Components/Features/Features.js';
import Imagination from '../../Components/Imagination/Imagination.js';
import Collections from '../../Components/Collections/Collections.js';
import Intro from '../../Components/Intro/Intro.js';
import Footer from '../../Components/Footer/Footer.js';
import Reviews from '../../Components/Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <MediaPartners/>
            <Intro/>
            <Features/>
            <Collections/>
            <Imagination/>
            <Reviews/>
            <Footer/>
        </>
    );
};

export default Home;