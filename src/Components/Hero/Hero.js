import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Hero = () => {
    return (
        <>
            <section className="banner" id="home">
                <Container className="c--custom">
                    <div className="text animate up">
                        <h1>LUXURY BOUTIQUE<br/>SALON EXPERIENCE</h1>
                        <p className="reg--24">THE MOST LUXURIOUS SALON EXPERIENCE IN LONDON</p>
                        <Link to="/" className="btn-1">Learn More</Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Hero;