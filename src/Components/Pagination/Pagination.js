import React, {useState, useEffect} from 'react';

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [counter, setCounter] = useState(1);
    const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total/showPerPage));
    // console.log(numberOfButtons);
    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value);
    },[counter]);

    const onButtonClick = (type, value) => {
        if(type === 'prev'){
            if(counter === 1){
                setCounter(1);
            }else{
                setCounter(counter - 1);
            }
        }else if(type === 'next'){
            if(Math.ceil(total/showPerPage) === counter){
                setCounter(counter);
            }else{
                setCounter(counter + 1);
            }
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center pt-5">

                <nav aria-label="Page navigation example">
                <ul className="pagination page-ul">
                    <li className="page-item prev"><a className="page-link" onClick={() => onButtonClick('prev')}>Previous</a></li>
                    
                    {
                        new Array(numberOfButtons).fill("").map((el, index) => (
                            <li className={`page-item pageNumber ${index+1 === counter ? "active": null}`}>
                                <a className="page-link" onClick={() => setCounter(index+1)}>{index+1}</a>
                            </li>
                        ))
                    }
                    
                    <li className="page-item next"><a className="page-link" onClick={() => onButtonClick('next')}>Next</a></li>
                </ul>
                </nav>
            </div>
        </>
    );
};

export default Pagination;