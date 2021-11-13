import React, { useState, useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import ReactStars from "react-rating-stars-component";

const ReviewForm = () => {
    const [rating, setRating] = useState(0);

    const ratingCount = {
        size: 0,
        count: 5,
        color: "black",
        activeColor: "red",
        value: 0,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            //   console.log(`Example 2: new value is ${newValue}`);
            setRating(newValue);
        }
    };

    const {loggedInUser} = useAuth();
    const author = loggedInUser.name;
    const img = loggedInUser.photo;
    const titleRef = useRef();
    const descRef = useRef();

    const handleAddCollection = e => {
        const title = titleRef.current.value;
        const desc = descRef.current.value;

        const newReview = { title, img, desc, rating, author };
        fetch('https://thawing-inlet-67169.herokuapp.com/add-review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                document.getElementById('success').style.display = 'block';
                e.target.reset();
            }else{
                document.getElementById('error').style.display = 'block';
            }
        })

        e.preventDefault();
    }
    return (
        <>
        <div className="main-content">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-12">


                                <div className="login content-form">
                                    <div className="text-center">
                                        <h2 className="reg-bod-56"> <strong>Add Your Review</strong></h2>
                                    </div>
                                    <div className="text-center mb-4">
                                        <p style={{color: 'green', display: 'none'}} id="success">Successfully added your review!</p>
                                        <p style={{color: 'red', display: 'none'}} id="error">There is a problem adding the review!</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="login-form bg-tag-1">
                                            <form className="form" onSubmit={handleAddCollection}>
                                                <div className="inputs my-4">
                                                    <div className="input-field">
                                                        <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit--14" type="text" ref={titleRef} name="title" placeholder="Enter Collection Title" autoComplete="on" required/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-envelope" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field mt-3">
                                                        <textarea rows="4" cols="40" ref={descRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="desc" placeholder="Enter Collection Description" autoComplete="on" required></textarea>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <h3 className="text-center">Enter Your Rating:</h3>
                                                    <div className="story-rating d-flex justify-content-center">
                                                        <ReactStars {...ratingCount} />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button className="signin-btn">Submit</button>
                                                </div>
                                            </form>
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

export default ReviewForm;