import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://thawing-inlet-67169.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [orders])

    //Deleting
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure you want to delete this order?');
        if(proceed) {
            const url = `https://thawing-inlet-67169.herokuapp.com/delete-order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    document.getElementById('success').style.display = 'block';
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders);
                }else{
                    document.getElementById('error').style.display = 'block';
                }
            });
        }
    }

    //Updating
    const handleUpdateOrder = id => {
        const proceed = window.confirm('Are you sure you want to approve this order?');
        if(proceed) {
            const url = `https://thawing-inlet-67169.herokuapp.com/update-order/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orders)
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    document.getElementById('success2').style.display = 'block';
                    setOrders(orders);
                }else{
                    document.getElementById('error2').style.display = 'block';
                }
            });
        }
    }

    return (
        <>
        <div className="main-content">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-12">


                                <div className="collections">
                                    <div className="service--title text-center">
                                        <h2 className="reg-bod-56"> <strong>Manage Orders</strong></h2>
                                    </div>
                                    <div className="text-center mb-3">
                                        <p style={{color: 'green', display: 'none'}} id="success1">Successfully deleted your order!</p>
                                        <p style={{color: 'red', display: 'none'}} id="error1">There is a problem deleting the order!</p>
                                        <p style={{color: 'green', display: 'none'}} id="success2">Successfully Approved this order!</p>
                                        <p style={{color: 'red', display: 'none'}} id="error2">There is a problem approving the order!</p>
                                    </div>

                                    <div className="service--table mt-5">
                                        <div className="card service--card">
                                            <div className="card-body overflowX">
                                                <div className="card--title">
                                                    <Row>
                                                        <Col sm={1} xs={4} className="text-center">
                                                            <p className="reg-22">TOKEN</p>
                                                        </Col>
                                                        <Col sm={3} xs={4} className="text-center">
                                                            <p className="reg-22">Name</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                                            <p className="reg-22">Status</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                                            <p className="reg-22">Phone</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                                            <p className="reg-22">ACTION</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block">
                                                            <p className="reg-22">ACTION</p>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                {orders.map((order) => (
                                                    <div className="card--data" data-aos="fade-left" data-aos-duration="1000" key={order._id}>
                                                        <div className="row mb-4">
                                                            <Col sm={1} xs={4} className="profile">
                                                                <div className="platform--icon mr-lg-4 mr-3 text-center">
                                                                    <h3>{order.orderId.slice(0,5)}</h3>
                                                                </div>
                                                            </Col>
                                                            <Col sm={3} xs={4} className="d-flex align-items-center justify-content-center">
                                                                <div className="platform">
                                                                    <p>{order.name}</p>
                                                                </div>
                                                            </Col>
                                                            <Col sm={2} xs={4} className="label">
                                                                {order.status ? <p id="label-one">Pending</p> : <p id="label-one" style={{backgroundColor: 'green', color: 'white'}}>Shipped</p>} 
                                                            </Col>
                                                            <Col sm={2} xs={4} className="traffic">
                                                                <p id="traffic-one">{order.phone}</p>
                                                            </Col>
                                                            <Col sm={2} xs={4} className="store">
                                                            {
                                                                order.status ? <button onClick={() => handleUpdateOrder(order._id)}><span id="price-one">SHIP THIS</span></button> : <button  style={{backgroundColor: 'gray', cursor: 'not-allowed'}} disabled><span id="price-one" style={{color: 'white'}}>N/A</span></button>
                                                            }
                                                            </Col>
                                                            <Col sm={2} xs={4} className="store">
                                                                <button id="store-one" onClick={() => handleDeleteOrder(order._id)}>DELETE</button>
                                                            </Col>
                                                        </div>
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orders;