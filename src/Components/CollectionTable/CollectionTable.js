import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CollectionTable = () => {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        fetch('https://thawing-inlet-67169.herokuapp.com/collections')
        .then(res => res.json())
        .then(data => setCollections(data.collections));
    }, [])

    //Deleting
    const handleDeleteCollection = id => {
        const proceed = window.confirm('Are you sure you want to delete this order?');
        if(proceed) {
            const url = `https://thawing-inlet-67169.herokuapp.com/delete-collection/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    document.getElementById('success').style.display = 'block';
                    const remainingCollections = collections.filter(collection => collection._id !== id);
                    setCollections(remainingCollections);
                }else{
                    document.getElementById('error').style.display = 'block';
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
                                                            <p className="reg-22">Added By</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                                            <p className="reg-22">CATEGORY</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                                            <p className="reg-22">Title</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                                            <p className="reg-22">PRICE</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block">
                                                            <p className="reg-22">ACTION</p>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                {collections.map((collection, count) => (
                                                    <div className="card--data" data-aos="fade-left" data-aos-duration="1000" key={collection._id}>
                                                        <div className="row mb-4">
                                                            <Col sm={1} xs={4} className="profile">
                                                                <div className="platform--icon mr-lg-4 mr-3 text-center">
                                                                    <h3>{1+count++}</h3>
                                                                </div>
                                                            </Col>
                                                            <Col sm={3} xs={4} className="d-flex align-items-center justify-content-center">
                                                                <div className="platform">
                                                                    <p>{collection.addedBy}</p>
                                                                </div>
                                                            </Col>
                                                            <Col sm={2} xs={4} className="label">
                                                                    <p id="label-one">{collection.category}</p>
                                                            </Col>
                                                            <Col sm={2} xs={4} className="traffic">
                                                                <p id="traffic-one">{collection.title.slice(0, 15)}...</p>
                                                            </Col>
                                                            <Col sm={2} xs={4} className="price">
                                                                <p className=""><span id="price-one">{collection.price}$ USD</span></p>
                                                            </Col>
                                                            <Col sm={2} xs={4} className="store">
                                                                <button id="store-one" onClick={() => handleDeleteCollection(collection._id)}>DELETE</button>
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

export default CollectionTable;