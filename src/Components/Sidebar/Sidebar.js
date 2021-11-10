import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../img/home.svg';
import account from '../../img/account.svg';
import shops from '../../img/shops.svg';
import products from '../../img/products.svg';
import services from '../../img/services.svg';

const Sidebar = () => {
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
                        <li className="nav-item py-2 px-4">
                            <Link className="nav-link" to="/">
                                <img src={products} alt={products} className="img-fluid mb-1"/>
                                <span className="nav-link-text px-2">Collections
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item py-2 px-4">
                            <Link className="nav-link" to="/">
                                <img src={shops} alt={shops} className="img-fluid mb-1"/>
                                <span className="nav-link-text px-2">Reviews
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item py-2 px-4">
                            <Link className="nav-link" to="/">
                                <img src={account} alt={account} className="img-fluid mb-1"/>
                                <span className="nav-link-text px-2">Users
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item py-2 px-4">
                            <Link className="nav-link" to="/">
                                <img src={services} alt={services} className="img-fluid mb-1"/>
                                <span className="nav-link-text px-2">Services
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;