import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pagination from '../Pagination/Pagination';
import SingleOffer from '../SingleOffer/SingleOffer';

const AllOffers = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('https://glacial-springs-97945.herokuapp.com/all-offers')
        .then(res => res.json())
        .then(data => setOffers(data));
    }, [])

    const [searchTerm, setSearchTerm] = useState('');

    const [showPerPage, setShowPerPage] = useState(9);

    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        setPagination({start:start, end:end});
    };

    return (
        <>
            <section className="allOffers pb-2">
                <Container className="c--custom">
                    <Row className="pt-5">
                        <Col md={12} className="text-center">
                            <h2 className="bold--40 mb-4"> <strong>All Offers</strong></h2>
                        </Col>
                    </Row>
                                        
                    <div className="offers">
                            <Row>
                                <Col sm={7} className="mx-auto">
                                    <form>
                                        <div className="inner-form">
                                            <div className="form-group">
                                                <span className="fa fa-search form-control-feedback" aria-hidden="true"></span>
                                                <input id="keyword" type="text" className="form-control fc-input" placeholder="SEARCH FOR OFFERS . . ." onChange={event => setSearchTerm(event.target.value)}/>
                                            </div>
                                        </div>
                                    </form>
                                </Col>  
                                <div className="offer--cards">
                                    {
                                        offers.filter(offer => {
                                            if(searchTerm == ""){
                                                return offer;
                                            }else if(offer.category.toLowerCase().includes(searchTerm.toLowerCase()) || offer.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                                return offer;
                                            }
                                        }).slice(pagination.start,pagination.end).map(offer =>
                                                <SingleOffer offer={offer} key={offer._id}/>
                                            )
                                    }
                                </div>
                            </Row>
                            <Row>
                                <Col>
                                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={offers.length}></Pagination>
                                </Col>
                            </Row>
                    </div>
                </Container>  
            </section>
        </>
    );
};

export default AllOffers;