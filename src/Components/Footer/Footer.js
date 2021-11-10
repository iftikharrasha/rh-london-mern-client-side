import React from 'react';
import { Container } from 'react-bootstrap';
import logo_footer from '../../img/logo-footer.png';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Container className="c--custom">
                    <div className="footer-inner">
                        <div className="footer-logo">
                            <img src={logo_footer} alt={logo_footer} className="img-fluid"/>
                        </div>
                        <div className="footer-navs">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Collection</a></li>
                                <li><a href="#">Our Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-navs">
                            <ul>
                                <li><a href="#">Create Account</a></li>
                                <li><a href="#">Customer Support</a></li>
                                <li><a href="#">Leave Review</a></li>
                                <li><a href="#">Book Now</a></li>
                            </ul>
                        </div>
                        <div className="footer-navs">
                            <ul>
                                <li><i aria-hidden="true" className="fab fa-instagram mr-2"></i><a href="#">Instagram</a></li>
                                <li><i aria-hidden="true" className="fab fa-facebook mr-2"></i><a href="#">Facebook</a></li>
                                <li><i aria-hidden="true" className="fab fa-twitter mr-2"></i><a href="#">Twitter</a></li>
                                <li><i aria-hidden="true" className="fab fa-linkedin mr-2"></i><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>

            <div className="copyright">
                <Container className="c--custom">
                    <p>&copy; This is a remake of <a href="https://rh-london.com/">RH-London</a> | Made with ❤ by Iftikhar Rasha</p>
                </Container>
            </div>
        </>
    );
};

export default Footer;