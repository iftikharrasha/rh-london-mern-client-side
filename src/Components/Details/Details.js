import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const { orderId } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [details, setDetails] = useState([]);
    const { loggedInUser } = useAuth();
    
    useEffect(() => {
        const url = `http://localhost:5000/service-details/${orderId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data));
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
        const category = details.category;
        const price = details.price;
        const status = true;

        const newUser = {orderId, name, email, phone, address, category, price, status };
        fetch('http://localhost:5000/place-order', {
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

    function PlaceOrderModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <h4 className="text-dark">Place Your Order</h4>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="login order">
                    <div className="text-center mb-3">
                        <p style={{color: 'green', display: 'none'}} id="success">Successfully placed your order! <br /> Payment Section Will be Coming Soon!</p>
                        <p style={{color: 'red', display: 'none'}} id="error">There is a problem adding your order!</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="login-form bg-tag-1">
                            <form className="form" onSubmit={handleAddOrder}>
                                <div className="inputs my-4">
                                    <div className="input-field">
                                        <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit--14" type="text" ref={nameRef} name="name" placeholder="Enter Your Name" autoComplete="on" value={loggedInUser.name}/>
                                        <div className="input-icon">
                                            <i class="fa fa-pencil-square-o i-envelope" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="input-field my-3">
                                        <input type="email" ref={emailRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="email" placeholder="Enter Your Email Address" autoComplete="on" value={loggedInUser.email}/>
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
                                    <button className="signin-btn">Checkout</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <>
            <section className="details">
                <Container className="c--custom">
                        <h2 className="text-uppercase text-center my-5">Service Details</h2>
                        <Row className="h-min border-left overflowX">
                            <div className="details-div">
                                <div className="detail-info" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1400">
                                    <p className="text-uppercase">{details.addedBy}, {details.courtesy}</p>
                                    <h3 className="mt-3 mb-5 reg-bod-56">{details.title}</h3>
                                    <div className="text-center mb-5">
                                        <Button className="btn-1" onClick={() => setModalShow(true)}>Place Order</Button>
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
                        <Row className="below">
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

            <PlaceOrderModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default Details;