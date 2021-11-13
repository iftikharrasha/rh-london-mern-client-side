import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Explore = () => {
    const [collections, setCollections] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 9;

    useEffect(() => {
        fetch(`https://thawing-inlet-67169.herokuapp.com/collections?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setCollections(data.collections);
            const count = data.count;
            const pageNumber = Math.ceil(count/size);
            setPageCount(pageNumber);
        });
    }, [page])

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

                        <div className="d-flex justify-content-center pt-5">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination page-ul">

                                    {
                                        
                                        [...Array(pageCount).keys()].map(number => (
                                            <li className={`page-item pageNumber ${number === page ? "active" : ''}`} key={number+1}>
                                                <a className="page-link" onClick={() => setPage(number)}>{number+1}</a>
                                            </li>
                                        ))
                                    }
                                
                            </ul>
                            </nav>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Explore;