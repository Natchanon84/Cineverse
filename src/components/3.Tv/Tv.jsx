import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Tv({ data_TV }) {
    const [showFullList, setShowFullList] = useState(false);
    const maxItemsToDisplay = 10;

    const handleShowAllClick = () => {
        setShowFullList(true);
    };

    console.log(data_TV);

    const itemsToDisplay = showFullList ? data_TV : data_TV.slice(0, maxItemsToDisplay);

    return (
        <div className="s-container 3">
            <div className="header">
                <h2 className='d-none d-sm-block'>Tv Series</h2>
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
                {itemsToDisplay.map((response) => (
                    <div key={response.id} className="s-content-container">
                        <Link to={`/Tv_series/${response.id}`} key={response.id}>
                            <img
                                className="s-content-img"
                                src={`http://image.tmdb.org/t/p/w500/${response.poster_path}`}
                            />
                        </Link>


                        <div className="s-content-title">
                            <h5>{response.name}</h5>
                            <p>{response.release_date}</p>
                        </div>

                    </div>
                ))}


            </div>

            <div className='showandhide'>
                {data_TV.length > maxItemsToDisplay && !showFullList && (
                    <button onClick={handleShowAllClick} className="show-all-btn">
                        Show All
                    </button>
                )}
                {showFullList && data_TV.length > maxItemsToDisplay && (
                    <button onClick={() => setShowFullList(false)} className="show-less-btn">
                        Hide
                    </button>
                )}
            </div>
        </div>
    );
}

export default Tv;
