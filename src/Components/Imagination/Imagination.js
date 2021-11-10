import React from 'react';
import { Container } from 'react-bootstrap';
import slide1 from '../../img/slide1.webp';
import slide2 from '../../img/slide2.webp';
import slide3 from '../../img/slide3.webp';

const Imagination = () => {
    return (
        <>
            <section className="showcase">
                <Container className="c--custom">
                    <div className="showcase-inner">
                        <h2 className="reg-bod-56">BEYOND IMAGINATION</h2>
                        <div className="items">
                            <img className="item1" src={slide1} alt={slide1}/>
                            <img className="item2" src={slide2} alt={slide2}/>
                            <img className="item3" src={slide3} alt={slide3}/>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Imagination;