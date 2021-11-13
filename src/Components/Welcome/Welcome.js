import React from 'react';
import useAuth from '../../hooks/useAuth';
import welcome from '../../img/welcome.png';

const Welcome = () => {
    const { loggedInUser } = useAuth();

    return (
        <>
            <div className="main-content">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-12">
                                <h4 className="reg-bod-56 pb-4">Welcome {loggedInUser.name},</h4>
                            </div>
                            <div className="col-md-12">
                                <div className="welcome-banner">
                                    <div className="card">
                                        <div className="row align-items-center">
                                            <div className="col-sm-8 pt-lg-4">
                                                <div className="card-body text-xs-center">
                                                    <h5 className="card-title reg-bod-24">Let’s get started!</h5>
                                                    <p className="reg-22">Here you can check your orders, add reviews and more all from this central dashboard.</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <img className="img-fluid" src={welcome} alt={welcome}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="welcome-counting">
                                    <div className="count-single">
                                        <p className="reg-22">Collections</p>
                                        <span>87</span>
                                    </div>
                                    <div className="count-single">
                                        <p className="reg-22">Pending</p>
                                        <span>17</span>
                                    </div>
                                    <div className="count-single">
                                        <p className="reg-22">Approved</p>
                                        <span>58</span>
                                    </div>
                                    <div className="count-single">
                                        <p className="reg-22">Rejected</p>
                                        <span>12</span>
                                    </div>
                                    <div className="count-single">
                                        <p className="reg-22">Users</p>
                                        <span>434</span>
                                    </div>
                                    <div className="count-single">
                                        <p className="reg-22">Categories</p>
                                        <span>08</span>
                                    </div>
                                    <div className="count-single">
                                        <p className="reg-22">Users</p>
                                        <span>03</span>
                                    </div>
                                    <div className="count-single">
                                        <p className="reg-22">Admins</p>
                                        <span>02</span>
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

export default Welcome;