import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import img1 from '../../img/img1.webp';

const Details = () => {
    const { orderId } = useParams();

    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/service-details/${orderId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data));
    }, [])

    return (
        <>
            <section className="details">
                <Container className="c--custom">
                        <h2 className="text-uppercase text-center my-5">Service Details</h2>
                        <Row className="border-left overflowX">
                            <div className="details-div">
                                <div className="detail-info" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1400">
                                    <p className="text-uppercase">{details.addedBy}, {details.courtesy}</p>
                                    <h3 className="mt-3 mb-5 reg-bod-56">{details.title}</h3>
                                    <div className="text-center mb-5">
                                        <Link to="/" className="btn-1">Place Order</Link>
                                    </div>
                                    <div className="anime">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <Col md={8} className="offset-md-4 overflowX">
                                <img className="img-fluid" src={details.img} alt={details.img} data-aos="fade-left" data-aos-delay="200" data-aos-duration="1200"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="my-5 p-3">
                                <p>Published: {details.Date}</p>
                                <h3>{details.subtitle}</h3>
                                <p className="reg-22 py-3">{details.desc}</p>
                                <h2><span>Price</span>: {details.price} | <span>Category</span>: {details.category}</h2>
                                <span>Courtesy: <a href={details.link}>{details.courtesy}</a></span>
                            </Col>
                        </Row>
                </Container>
            </section>
        </>
    );
};

export default Details;