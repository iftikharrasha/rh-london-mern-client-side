import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const Explore = () => {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/collections')
        .then(res => res.json())
        .then(data => setCollections(data));
    }, [])

    // const [searchTerm, setSearchTerm] = useState('');

    // const [showPerPage, setShowPerPage] = useState(9);

    // const [pagination, setPagination] = useState({
    //     start: 0,
    //     end: showPerPage,
    // });

    // const onPaginationChange = (start, end) => {
    //     setPagination({start:start, end:end});
    // };

    return (
        <>
            <section className="explore pb-2">
                <Container className="c--custom">
                    <div className="collection-inner">
                        <h2 className="reg-bod-56">Our Collections</h2>
                        <div className="collection-boxes">

                            {collections.map((collection) => (
                                <div className="box" key={collection._id}>
                                    <h6>{collection.category}</h6>
                                    <div className="img">
                                        <Link to="/service-details">
                                            <img src={collection.thumb} alt={collection.thumb}/>
                                        </Link>
                                    </div>
                                    <div className="info">
                                        <h4>{collection.title}</h4>
                                        <p>{collection.desc.split(' ').slice(0, 21).toString().replace(/,/g, ' ')}... <Link to="/service-details">READ MORE</Link></p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Explore;