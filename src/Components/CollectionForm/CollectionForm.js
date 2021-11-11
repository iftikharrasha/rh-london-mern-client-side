import React, { useRef } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CollectionForm = () => {
    // const { addedBy } = useParams();
    // const titleRef = useRef();
    // const catRef = useRef();
    // const imgRef = useRef();
    // const descRef = useRef();
    // const priceRef = useRef();

    // const handleAddOffer = e => {
    //     const title = titleRef.current.value;
    //     const category = catRef.current.value;
    //     const img = imgRef.current.value;
    //     const desc = descRef.current.value;
    //     const price = priceRef.current.value;

    //     const newUser = {title, category, img, desc, price, addedBy};
    //     fetch('https://glacial-springs-97945.herokuapp.com/add-offers', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newUser)
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         if(data.insertedId){
    //             // alert('Successfully added an offer!');
    //             document.getElementById('success').style.display = 'block';
    //             e.target.reset();
    //         }else{
    //             document.getElementById('error').style.display = 'block';
    //         }
    //     })

    //     e.preventDefault();
    // }
    return (
        <>
        <div className="main-content">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-12">


                                <div className="login content-form">
                                    <div className="text-center">
                                        <h2 className="reg-bod-56"> <strong>All Collections</strong></h2>
                                    </div>
                                    <div className="text-center mb-4">
                                        <p style={{color: 'green', display: 'none'}} id="success">Successfully added the collection!</p>
                                        <p style={{color: 'red', display: 'none'}} id="error">There is a problem adding the collection!</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="login-form bg-tag-1">
                                            <form className="form">
                                                <div className="inputs my-4">
                                                    <div className="input-field">
                                                        <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit--14" type="text" name="title" placeholder="Enter Collection Title" autoComplete="on" required/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-envelope" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="cat" placeholder="Enter Category: popular, camping etc." autoComplete="on" required/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="img" placeholder="Enter Image Link" autoComplete="on" required/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="price" placeholder="Enter Collection Starting Price" autoComplete="on" required/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <textarea rows="4" cols="40" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="desc" placeholder="Enter Collection Description" autoComplete="on" required></textarea>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
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

export default CollectionForm;