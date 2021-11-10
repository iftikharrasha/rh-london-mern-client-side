import React from 'react';
import { Container } from 'react-bootstrap';
import collection1 from '../../img/collection-img1.webp';
import collection2 from '../../img/collection-img2.webp';
import collection3 from '../../img/collection-img3.webp';
import collection4 from '../../img/collection-img4.webp';
import collection5 from '../../img/collection-img5.webp';
import collection6 from '../../img/collection-img6.webp';
import collection7 from '../../img/collection-img7.webp';
import collection8 from '../../img/collection-img8.webp';

const Collections = () => {
    return (
        <>
           <section className="collection">
                <Container className="c--custom">
                    <div className="collection-inner">
                        <h2 className="reg-bod-56">Our Collections</h2>
                        <div className="collection-boxes">

                            <div className="box">
                                <h6>Treatment</h6>
                                <div className="img">
                                    <img src={collection1} alt={collection1}/>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Colour</h6>
                                <div className="img">
                                    <img src={collection2} alt={collection2}/>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Extension</h6>
                                <div className="img">
                                    <img src={collection3} alt={collection3}/>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Colour</h6>
                                <div className="img">
                                    <img src={collection4} alt={collection4}/>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Treatment</h6>
                                <div className="img">
                                    <img src={collection5} alt={collection5}/>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Extension</h6>
                                <div className="img">
                                    <img src={collection6} alt={collection6}/>
                                </div>
                            </div>

                            {/* <div className="box">
                                <h6>Asperiose</h6>
                                <div className="img">
                                    <img src={collection7} alt={collection7}/>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Asperiose</h6>
                                <div className="img">
                                    <img src={collection8} alt={collection8}/>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </Container>
            </section> 
        </>
    );
};

export default Collections;