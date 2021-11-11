import React from 'react';
import { Container } from 'react-bootstrap';
import client1 from '../../img/7.jpg';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Reviews = () => {
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };

    return (
        <>
            <section className="reviews">

                <Container className="c--custom">
                    <div className="text-center">
                        <h2 className="reg-bod-56 mb-5">WHAT OUR CLIENT SAYS</h2>
                    </div>
                        <Slider {...settings}>
                        {/* {
                        outlet.map(outlet => <Card outlet={outlet} key={outlet.key} category={relCat}></Card>)
                        } */}

                            <div className="row">
                                <div className="story">
                                    <figure className="story-shape">
                                        <img src={client1} className="story-img" alt={client1}/>
                                        <figcaption className="story-caption">Mary Smith</figcaption>
                                    </figure>
                                    <div className="story-text">
                                        <h3 className="heading-tertiary margin-bottom-small">
                                            I had the best week ever with my family
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ratione illum
                                            exercitationem? Recusandae neque nobis ipsa eligendi rerum ea at optio placeat! Saepe
                                            voluptate adipisci eius veniam. Tempora, laborum eos.
                                        </p>
                                        <div className="story-rating">
                                            <span className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="story">
                                    <figure className="story-shape">
                                        <img src={client1} className="story-img" alt={client1}/>
                                        <figcaption className="story-caption">Mary Smith</figcaption>
                                    </figure>
                                    <div className="story-text">
                                        <h3 className="heading-tertiary margin-bottom-small">
                                            I had the best week ever with my family
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ratione illum
                                            exercitationem? Recusandae neque nobis ipsa eligendi rerum ea at optio placeat! Saepe
                                            voluptate adipisci eius veniam. Tempora, laborum eos.
                                        </p>
                                        <div className="story-rating">
                                            <span className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="story">
                                    <figure className="story-shape">
                                        <img src={client1} className="story-img" alt={client1}/>
                                        <figcaption className="story-caption">Mary Smith</figcaption>
                                    </figure>
                                    <div className="story-text">
                                        <h3 className="heading-tertiary margin-bottom-small">
                                            I had the best week ever with my family
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ratione illum
                                            exercitationem? Recusandae neque nobis ipsa eligendi rerum ea at optio placeat! Saepe
                                            voluptate adipisci eius veniam. Tempora, laborum eos.
                                        </p>
                                        <div className="story-rating">
                                            <span className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>

                        <div className="text-center mb-5">
                            <Link to="/" className="btn-1">Read all reviews</Link>
                        </div>
                </Container>

            </section>
        </>
    );
};

export default Reviews;