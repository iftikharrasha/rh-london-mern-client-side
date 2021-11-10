import React from 'react';
import { Container } from 'react-bootstrap';
import brand1 from '../../img/brand-logo1.png';
import brand2 from '../../img/brand-logo2.png';
import brand3 from '../../img/brand-logo3.png';
import brand4 from '../../img/brand-logo4.png';
import brand5 from '../../img/brand-logo5.png';

const MediaPartners = () => {
    return (
        <>
            <section className="brand-logo" data-scene>
                <Container className="c--custom text-center">
                    <h3 className="reg-bod-24 my-5">AS SEEN ON...</h3>
                    <div className="brand-logo-inner">
                        <div className="item"><img src={brand1} alt={brand1}/></div>
                        <div className="item"><img src={brand2} alt={brand2}/></div>
                        <div className="item"><img src={brand3} alt={brand3}/></div>
                        <div className="item"><img src={brand4} alt={brand4}/></div>
                        <div className="item"><img src={brand5} alt={brand5}/></div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default MediaPartners;