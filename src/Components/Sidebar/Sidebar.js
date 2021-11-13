import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import home from '../../img/home.svg';
import account from '../../img/account.svg';
import shops from '../../img/shops.svg';
import products from '../../img/products.svg';
import services from '../../img/services.svg';
import useAuth from '../../hooks/useAuth';

const Sidebar = () => {
    const { admin, loggedInUser } = useAuth();
    return (
        <>
            <nav className="sidenav">
                <div className="navbar-inner">
                    <ul className="navbar-nav">
                        <li className="nav-item py-2 px-4">
                            <Link className="nav-link" to="/dashboard">
                                <img src={home} alt={home} className="img-fluid mb-1"/>
                                <span className="nav-link-text px-2">Dashboard
                                </span>
                            </Link>
                        </li>

                        {admin &&  <li className="nav-item py-2 px-4">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                                <span className="nav-link">
                                                    <img src={products} alt={products} className="img-fluid mb-1"/>
                                                    <span className="nav-link-text px-2">Collections
                                                    </span>
                                                </span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Link className="nav-link" to="/all-collections">
                                                    <span className="nav-link-text px-2">All Collections</span>
                                                </Link>
                                                <Link className="nav-link" to="/add-collections">
                                                    <span className="nav-link-text px-2">Add Collection</span>
                                                </Link>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                        }

                        {!admin && <li className="nav-item py-2 px-4">
                                    <Link className="nav-link" to="/add-review">
                                        <img src={services} alt={services} className="img-fluid mb-1"/>
                                        <span className="nav-link-text px-2">Add Review</span>
                                    </Link>
                                </li>
                        }

                        {admin &&  <li className="nav-item py-2 px-4">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                    <span className="nav-link" to="/">
                                        <img src={services} alt={services} className="img-fluid mb-1"/>
                                        <span className="nav-link-text px-2">Reviews
                                        </span>
                                    </span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Link className="nav-link" to="/all-reviews">
                                        <span className="nav-link-text px-2">All Reviews</span>
                                    </Link>
                                    <Link className="nav-link" to="/add-review">
                                        <span className="nav-link-text px-2">Add Reviews</span>
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li> }
                        {admin && <li className="nav-item py-2 px-4">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                    <span className="nav-link" to="/">
                                        <img src={account} alt={account} className="img-fluid mb-1"/>
                                        <span className="nav-link-text px-2">Users
                                        </span>
                                    </span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Link className="nav-link" to="/all-users">
                                        <span className="nav-link-text px-2">All Users</span>
                                    </Link>
                                    <Link className="nav-link" to="/add-admin">
                                        <span className="nav-link-text px-2">Add Admin</span>
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li> }
                        {admin && <li className="nav-item py-2 px-4">
                            <Link className="nav-link" to="/manage-orders">
                                <img src={shops} alt={shops} className="img-fluid mb-1"/>
                                <span className="nav-link-text px-2">Manage orders
                                </span>
                            </Link>
                        </li>}
                        {!admin && 
                            <li className="nav-item py-2 px-4">
                            <Link className="nav-link" to={`/my-orders/${loggedInUser.email}`}>
                                <img src={shops} alt={shops} className="img-fluid mb-1"/>
                                <span className="nav-link-text px-2">My orders
                                </span>
                            </Link>
                        </li> }
                        {!admin && 
                            <li className="nav-item py-2 px-4">
                            <Link className="nav-link" to="/pay-now">
                                <img src={account} alt={account} className="img-fluid mb-1"/>
                                <span className="nav-link-text px-2">Pay Now!
                                </span>
                            </Link>
                        </li> }
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;