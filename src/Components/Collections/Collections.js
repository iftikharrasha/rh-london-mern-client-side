import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Collections = () => {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        fetch('https://thawing-inlet-67169.herokuapp.com/collections')
        .then(res => res.json())
        .then(data => setCollections(data.collections));
    }, [])

    return (
        <>
           <section className="collection">
                <Container className="c--custom">
                    <div className="collection-inner">
                        <h2 className="reg-bod-56">Our Collections</h2>
                        <div className="collection-boxes">

                        {collections.slice(0, 6).map((collection) => (
                            <div className="box" key={collection._id}>
                                <h6>{collection.category}</h6>
                                <div className="img">
                                    <Link to={"/service-details/"+collection._id}>
                                        <img src={collection.thumb} alt={collection.thumb}/>
                                    </Link>
                                </div>
                                <div className="info">
                                    <h4>{collection.title}</h4>
                                    <p>{collection.desc.split(' ').slice(0, 21).toString().replace(/,/g, ' ')}... <Link to={"/service-details/"+collection._id}>PURCHASE</Link></p>
                                </div>
                            </div>
                        ))}
                        
                        </div>
                    </div>

                    <div className="text-center mb-5">
                        <Link to="/explore" className="btn-1">See all collections</Link>
                    </div>
                </Container>
            </section> 
        </>
    );
};

export default Collections;