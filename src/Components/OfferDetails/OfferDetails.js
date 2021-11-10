import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';

const OfferDetails = (props) => {
    const { orderId } = useParams();

    const [offer, setOffer] = useState([]);
    useEffect(() => {
        const url = `https://glacial-springs-97945.herokuapp.com/place-order/${orderId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOffer(data));
    }, [])

    
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();


    const handleAddOrder = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const category = offer.category;
        const price = offer.price;
        const token = localStorage.getItem('uid');
        const status = true;

        const newUser = {orderId, name, email, phone, address, category, price, token, status };
        fetch('https://glacial-springs-97945.herokuapp.com/add-order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                // alert('Successfully added an offer!');
                document.getElementById('success').style.display = 'block';
                e.target.reset();
            }else{
                document.getElementById('error').style.display = 'block';
            }
        })

        e.preventDefault();
    }
    return (
        <>
            <section className="hero page" id="home">
                <Container className="c--custom">
                    <Row className="py-5">
                        <Col md={12} className="text-center">
                            <h2 className="bold--40"> <strong>Offers Details</strong></h2>
                        </Col>
                    </Row>
                </Container>
                <Container className="c--custom">
                    <div className="hero--top page--top">
                        <Row className="overflowX">
                            <Col lg={12} className="order-lg-1 order-2 pt-lg-0 pt-5 text-lg-left text-center mb-lg-5 mb-0 " data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                                <img className="img-fluid banner" src={offer.img} alt={offer.key}/>
                            </Col>
                            <Col lg={12} className="order-lg-2 order-1" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                                <h1 className="bold--30">{offer.title}</h1>
                                <h2 className="my-4 bold--30">Category: {offer.category}</h2>
                                <h4 className="lit--16">{offer.desc}</h4>
                                <p className="mt-4 bold--16">Price Starting from:</p> 
                                <h5 className="lit--16">{offer.price}$/Night</h5>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className="login">
                <div className="text-center mb-3">
                    <p style={{color: 'green', display: 'none'}} id="success">Successfully added an Your order!</p>
                    <p style={{color: 'red', display: 'none'}} id="error">There is a problem adding the order!</p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="login-form bg-tag-1">
                        <div className="text-center">
                            <h2 className="mt-3 text-center reg-28">Place Your Order
                            </h2>
                        </div>
                        <form className="form" onSubmit={handleAddOrder}>
                            <div className="inputs my-4">
                                <div className="input-field">
                                    <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit--14" type="text" ref={nameRef} name="name" placeholder="Enter Your Name" autoComplete="on" required/>
                                    <div className="input-icon">
                                        <i class="fa fa-pencil-square-o i-envelope" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="input-field my-3">
                                    <input type="email" ref={emailRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="email" placeholder="Enter Your Email Address" autoComplete="on" required/>
                                    <div className="input-icon">
                                        <i class="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="input-field my-3">
                                    <input type="number" ref={phoneRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="phone" placeholder="Enter Your Phone Number" autoComplete="on" required/>
                                    <div className="input-icon">
                                        <i class="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="input-field my-3">
                                    <input type="text" ref={addressRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="adress" placeholder="Enter Your Address" autoComplete="on" required/>
                                    <div className="input-icon">
                                        <i class="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="signin-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OfferDetails;