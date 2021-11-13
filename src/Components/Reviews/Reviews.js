import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])

    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
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

    const ratingCount = {
        size: 0,
        count: 5,
        color: "black",
        activeColor: "red",
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
          console.log(`Example 2: new value is ${newValue}`);
        }
    };

    return (
        <>
            <section className="reviews">

                <Container className="c--custom">
                    <div className="text-center">
                        <h2 className="reg-bod-56 mb-5">WHAT OUR CLIENT SAYS</h2>
                    </div>
                        <Slider {...settings}>

                            {reviews.map((review) => (
                            <div className="row" key={review._id}>
                                <div className="story">
                                    <figure className="story-shape">
                                        <img src={review.img} className="story-img" alt={review.img}/>
                                        <figcaption className="story-caption">{review.author}</figcaption>
                                    </figure>
                                    <div className="story-text">
                                        <h3 className="heading-tertiary margin-bottom-small">
                                            {review.title}
                                        </h3>
                                        <p>
                                            {review.desc}
                                        </p>
                                        <div className="story-rating">
                                            <ReactStars {...ratingCount} value={review.rating} edit={false}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}

                        </Slider>

                        <div className="text-center mb-5">
                            <Link to="/" className="btn-1">Drop a review</Link>
                        </div>
                </Container>

            </section>
        </>
    );
};

export default Reviews;