import React from 'react';
import { Container } from 'react-bootstrap';
import location1 from '../../img/location-1.webp';
import location2 from '../../img/location-2.webp';

const Features = () => {
    return (
        <>
            <section className="feature">
                <Container className="c--custom">
                    <div className="features">
                        <div className="features-inner">
                            <div className="img" data-aos="zoom-out-up">
                                <img src={location1} alt={location1}/>
                            </div>
                            <div className="text" data-aos="zoom-out-left">
                                <h2 className="reg-bod-56">Based in the heart of London’s Chelsea borough.</h2>
                                <div className="text-inner">
                                    <p className="reg-22">Our salon was created by the founders of Richy Hair UK – the global leader in ethical hair extensions – and we pride ourselves on going above and beyond to cater to our guests, allowing them to look and feel like the best version of themselves</p>
                                    <a href="#" className="btn-1">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="features">
                        <div className="features-inner">
                            <div className="text" data-aos="zoom-out-right">
                                <h2 className="reg-bod-56">City’s most beautiful destination for hair.</h2>
                                <div className="text-inner">
                                    <p className="reg-22">When you arrive outside the salon, take in the stunning rainforest-inspired display which covers the entire frontage of the three-story town house. Once inside you will be greeted by our team of award-winning celebrity stylists.</p>
                                    <a href="#" className="btn-1">Learn More</a>
                                </div>
                            </div>
                            <div className="img" data-aos="zoom-out-left">
                                <img src={location2} alt={location1}/>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Features;