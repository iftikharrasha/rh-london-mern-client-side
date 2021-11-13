import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://thawing-inlet-67169.herokuapp.com/all-users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])

    //Deleting
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete this order?');
        if(proceed) {
            const url = `https://thawing-inlet-67169.herokuapp.com/delete-user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    document.getElementById('success').style.display = 'block';
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
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
                                        <h2 className="reg-bod-56"> <strong>All Users</strong></h2>
                                    </div>
                                    <div className="text-center mb-3">
                                        <p style={{color: 'green', display: 'none'}} id="success">Successfully deleted the review!</p>
                                        <p style={{color: 'red', display: 'none'}} id="error">There is a problem deleting the review!</p>
                                    </div>

                                    <div className="service--table mt-5">
                                        <div className="card service--card">
                                            <div className="card-body overflowX">
                                                <div className="card--title">
                                                    <Row>
                                                        <Col sm={1} xs={4} className="text-center">
                                                            <p className="reg-22">NO.</p>
                                                        </Col>
                                                        <Col sm={4} xs={4} className="text-center">
                                                            <p className="reg-22">Name</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block d-none text-center">
                                                            <p className="reg-22">Role</p>
                                                        </Col>
                                                        <Col sm={3} xs={4} className="d-sm-block d-none text-center">
                                                            <p className="reg-22">Email</p>
                                                        </Col>
                                                        <Col sm={2} xs={4} className="d-sm-block">
                                                            <p className="reg-22">ACTION</p>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                {users.map((user, count) => (
                                                    <div className="card--data" data-aos="fade-left" data-aos-duration="1000" key={user._id}>
                                                        <div className="row mb-4">
                                                            <Col sm={1} xs={4} className="d-flex align-items-center justify-content-center profile">
                                                                <div className="platform--icon mr-lg-4 mr-3 text-center">
                                                                    <h3>{1+count++}</h3>
                                                                </div>
                                                            </Col>
                                                            <Col sm={4} xs={4} className="d-flex align-items-center justify-content-center">
                                                                <div className="platform">
                                                                    <p>{user.displayName}</p>
                                                                </div>
                                                            </Col>
                                                            <Col sm={2} xs={4} className="d-flex align-items-center justify-content-center label">
                                                                    <p id="label-one">{user.role || 'user'}</p>
                                                            </Col>
                                                            <Col sm={3} xs={4} className="d-flex align-items-center justify-content-center traffic">
                                                                <p id="traffic-one">{user.email}</p>
                                                            </Col>
                                                            <Col sm={2} xs={4} className="store">
                                                                <button id="store-one" onClick={() => handleDeleteUser(user._id)}>DELETE</button>
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

export default UsersTable;