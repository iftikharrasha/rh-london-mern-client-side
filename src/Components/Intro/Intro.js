import React from 'react';
import { Container } from 'react-bootstrap';

const Intro = () => {
    return (
        <>
            <section className="intro">
                <Container className="c--custom">
                    <div className="intro-inner py-5">
                        <div className="text text-right">
                            <h3>We are a full service boutique salon that specialisesin ethical hair extensions.</h3>
                        </div>
                        <div className="text text-left">
                            <h3>A bespoke hair salon Specialized in ethical hair extensions with perfect colour match!</h3>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Intro;