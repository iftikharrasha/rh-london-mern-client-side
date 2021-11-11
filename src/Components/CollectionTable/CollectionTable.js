import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';

const CollectionTable = () => {
    const { orderOwner } = useParams();

    // const [myOrders, setMyOrders] = useState([]);
    // useEffect(() => {
    //     const url = `https://glacial-springs-97945.herokuapp.com/my-orders/${orderOwner}`
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setMyOrders(data));
    // }, [])

    // //Deleting
    // const handleDeleteOrder = id => {
    //     const proceed = window.confirm('Are you sure you want to delete this order?');
    //     if(proceed) {
    //         const url = `https://glacial-springs-97945.herokuapp.com/cancel/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             if(data.deletedCount > 0){
    //                 document.getElementById('success').style.display = 'block';
    //                 const remainingOrders = myOrders.filter(myOrder => myOrder._id !== id);
    //                 setMyOrders(remainingOrders);
    //             }else{
    //                 document.getElementById('error').style.display = 'block';
    //             }
    //         });
    //     }
    // }

    return (
        <>
        <div className="main-content">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-12">


                                <div className="collections">
                                    <div className="service--title text-center">
                                        <h2 className="reg-bod-56"> <strong>All Collections</strong></h2>
                                    </div>
                                    <div className="text-center mb-3">
                                        <p style={{color: 'green', display: 'none'}} id="success">Successfully deleted the collection!</p>
                                        <p style={{color: 'red', display: 'none'}} id="error">There is a problem deleting the collection!</p>
                                    </div>

                                    <div className="service--table mt-5">
                                        <div className="card service--card">
                                            <div className="card-body overflowX">
                                                <div className="card--title">
                                                    <Row>
                                                        <Col sm={1} xs={4} className="text-center">
                                                            <p className="reg-22">NO.</p>
                                                        </Col>
                                                        <Col sm={3} xs={4} className="text-center">
                                                            <p className="reg-22">ORDER TOKEN</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                                            <p className="reg-22">STATUS</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                                            <p className="reg-22">CATEGORY</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                                            <p className="reg-22">PRICE</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block">
                                                            <p className="reg-22">ACTION</p>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                <div className="card--data" data-aos="fade-left" data-aos-duration="1000">
                                                    <div className="row mb-4">
                                                        <Col sm={1} xs={4} className="profile">
                                                            <div className="platform--icon mr-lg-4 mr-3 text-center">
                                                                <h3>1</h3>
                                                            </div>
                                                        </Col>
                                                        <Col sm={3} xs={4} className="d-flex align-items-center justify-content-center">
                                                            <div className="platform">
                                                                <p>OrderID</p>
                                                            </div>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="label">
                                                                <p id="label-one">Approved</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="traffic">
                                                            <p id="traffic-one">Category</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="price">
                                                            <p className=""><span id="price-one">124$ USD</span></p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="store">
                                                            <button id="store-one">DELETE</button>
                                                        </Col>
                                                    </div>
                                                </div>

                                                   

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

export default CollectionTable;