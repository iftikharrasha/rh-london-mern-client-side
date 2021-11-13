import React, { useState, useRef } from 'react';

const AdminForm = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://thawing-inlet-67169.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                document.getElementById('success').style.display = 'block';
                e.target.reset();
            }else{
                document.getElementById('success').style.display = 'block';
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
                                        <h2 className="reg-bod-56"> <strong>Add An Admin</strong></h2>
                                    </div>
                                    <div className="text-center mb-4">
                                        <p style={{color: 'green', display: 'none'}} id="success">User successfully added as Admin!</p>
                                        <p style={{color: 'red', display: 'none'}} id="error">There is a problem adding the admin!</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="login-form bg-tag-1">
                                            <form className="form" onSubmit={handleAdminSubmit}>
                                                <div className="inputs my-4">
                                                    <div className="input-field">
                                                        <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit--14" onBlur={handleOnBlur} type="text" name="email" placeholder="Enter Admin Email" autoComplete="on" required/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-envelope" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button className="signin-btn">Give Privilege</button>
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

export default AdminForm;