import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import collection1 from '../../img/collection-img1.webp';
import collection2 from '../../img/collection-img2.webp';
import collection3 from '../../img/collection-img3.webp';
import collection4 from '../../img/collection-img4.webp';
import collection5 from '../../img/collection-img5.webp';
import collection6 from '../../img/collection-img6.webp';
import collection7 from '../../img/collection-img7.webp';
import collection8 from '../../img/collection-img8.webp';
import Pagination from '../Pagination/Pagination';

const Explore = () => {
    // const [offers, setOffers] = useState([]);
    // useEffect(() => {
    //     fetch('https://glacial-springs-97945.herokuapp.com/all-offers')
    //     .then(res => res.json())
    //     .then(data => setOffers(data));
    // }, [])

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

                            <div className="box">
                                <h6>Treatment</h6>
                                <div className="img">
                                    <img src={collection1} alt={collection1}/>
                                </div>
                                <div className="info">
                                    <h4>Lorem, ipsum dolor sit amet consectetur amet consectetur amet.</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing. consectetur adipisicing... <Link to="/">READ MORE</Link></p>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Colour</h6>
                                <div className="img">
                                    <img src={collection2} alt={collection2}/>
                                </div>
                                <div className="info">
                                    <h4>Lorem, ipsum dolor sit amet consectetur amet consectetur amet.</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing. consectetur adipisicing... <Link to="/">READ MORE</Link></p>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Extension</h6>
                                <div className="img">
                                    <img src={collection3} alt={collection3}/>
                                </div>
                                <div className="info">
                                    <h4>Lorem, ipsum dolor sit amet consectetur amet consectetur amet.</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing. consectetur adipisicing... <Link to="/">READ MORE</Link></p>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Colour</h6>
                                <div className="img">
                                    <img src={collection4} alt={collection4}/>
                                </div>
                                <div className="info">
                                    <h4>Lorem, ipsum dolor sit amet consectetur amet consectetur amet.</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing. consectetur adipisicing... <Link to="/">READ MORE</Link></p>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Treatment</h6>
                                <div className="img">
                                    <img src={collection5} alt={collection5}/>
                                </div>
                                <div className="info">
                                    <h4>Lorem, ipsum dolor sit amet consectetur amet consectetur amet.</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing. consectetur adipisicing... <Link to="/">READ MORE</Link></p>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Extension</h6>
                                <div className="img">
                                    <img src={collection6} alt={collection6}/>
                                </div>
                                <div className="info">
                                    <h4>Lorem, ipsum dolor sit amet consectetur.</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur. Dolor sit amet consectetur adipisicing. consectetur adipisicing... <Link to="/">READ MORE</Link></p>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Extension</h6>
                                <div className="img">
                                    <img src={collection7} alt={collection7}/>
                                </div>
                                <div className="info">
                                    <h4>Lorem, ipsum dolor sit amet consectetur.</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur. Dolor sit amet consectetur adipisicing. consectetur adipisicing... <Link to="/">READ MORE</Link></p>
                                </div>
                            </div>

                            <div className="box">
                                <h6>Extension</h6>
                                <div className="img">
                                    <img src={collection8} alt={collection8}/>
                                </div>
                                <div className="info">
                                    <h4>Lorem, ipsum dolor sit amet consectetur.</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur. Dolor sit amet consectetur adipisicing. consectetur adipisicing... <Link to="/">READ MORE</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Explore;