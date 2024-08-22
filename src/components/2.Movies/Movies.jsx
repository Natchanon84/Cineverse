import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Movies({ data_NS ,data_CM}) {
    const [showFullList, setShowFullList] = useState(false);
    const maxItemsToDisplay = 10;

    const handleShowAllClick = () => {
        setShowFullList(true);
    };

    // console.log(data);

    const itemsToDisplay_NS = showFullList ? data_NS : data_NS.slice(0, maxItemsToDisplay);
    const itemsToDisplay = showFullList ? data_CM : data_CM.slice(0, maxItemsToDisplay);

    return (
        <div className="s-container c3">

            <div className="header">
                <h2 className='d-none d-sm-block'>Now Showing</h2>

                <div className="navbs">
                    <span />
                    <ul className="section1-navbs">
                        <Link to="/">Home</Link>
                        <Link to="/movies">Movies</Link>
                        <Link to="/tv">Tv Series</Link>
                    </ul>
                </div>
            </div>

            <div className="s-content">
                {itemsToDisplay_NS.map((response) => (
                    <div key={response.id} className="s-content-container">
                        <Link to={`/movie_NS/${response.id}`} key={response.id}>
                            <img
                                className="s-content-img"
                                src={`http://image.tmdb.org/t/p/w500/${response.poster_path}`} />
                            <div className="s-content-title">
                                <h5 className='text-white'>{response.title}</h5>
                                <p>{response.release_date}</p>
                            </div> </Link>
                    </div>
                ))}
            </div>

            <div className='showandhide'>
                {data_NS.length > maxItemsToDisplay && !showFullList && (
                    <button onClick={handleShowAllClick} className="show-all-btn">
                        Show All
                    </button>
                )}
                {showFullList && data_NS.length > maxItemsToDisplay && (
                    <button onClick={() => setShowFullList(false)} className="show-less-btn">
                        Hide
                    </button>
                )}
            </div>
{/*  */}


            <div className="header">
                <h2>Coming soon</h2>
            </div>

            <div className="s-content">
                {itemsToDisplay.map((response) => (
                    <div key={response.id} className="s-content-container">
                        <Link to={`/movie_CM/${response.id}`} key={response.id}>
                            <img
                                className="s-content-img"
                                src={`http://image.tmdb.org/t/p/w500/${response.poster_path}`} />
                            <div className="s-content-title">
                                <h5 className='text-white'>{response.title}</h5>
                                <p>{response.release_date}</p>
                            </div> </Link>
                    </div>
                ))}
            </div>

            <div className='showandhide'>
                {data_CM.length > maxItemsToDisplay && !showFullList && (
                    <button onClick={handleShowAllClick} className="show-all-btn">
                        Show All
                    </button>
                )}
                {showFullList && data_CM.length > maxItemsToDisplay && (
                    <button onClick={() => setShowFullList(false)} className="show-less-btn">
                        Hide
                    </button>
                )}
            </div>
        </div>
    )
}

export default Movies;
