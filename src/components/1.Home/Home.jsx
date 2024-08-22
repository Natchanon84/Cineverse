import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../component.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "../6.Footer/Footer";
import Movies from "../2.Movies/Movies";
// import Tv from "../3.Tv/Tv";

function Home({ data, data_CM }) {

    console.log(data_CM);

    const [num, setNum] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const [showFullList, setShowFullList] = useState(false);
    const maxItemsToDisplay = 10;

    const itemsToDisplay = showFullList ? data_CM : data_CM.slice(0, maxItemsToDisplay);
    const handleShowAllClick = () => {
        setShowFullList(true);
    };
    useEffect(() => {
        const randomMath = Math.round(Math.random() * 20);
        setNum(randomMath);
        setIsLoading(false); // เปลี่ยนเป็น false เมื่อข้อมูลพร้อม
    }, [data]); // เพิ่ม data ใน dependency array เพื่อให้ useEffect ทำงานเมื่อ data เปลี่ยน

    // console.log(data[num]);

    return (
        <div className="section1-container">
            <div className="navbs">
                <span />
                <ul className="section1-navbs">
                    <Link to="/" >Home</Link>
                    <Link to="/movies" >Movies</Link>
                    <Link to="/tv" >Tv Series</Link>
                </ul>
            </div>
            {isLoading ? (
                <div>Loading...</div>
            ) : data[num] && data[num].backdrop_path ? (
                <div className="section1-content">

                    <img className="img-fluid" src={`http://image.tmdb.org/t/p/original/${data[num].backdrop_path}`} />

                    <div className="overview-box">

                        <div className="section1-overview-box">
                            <h1 className='title '>{data[num].title}</h1>
                            <p className='overview d-none d-sm-block'>{data[num].overview}</p>
                            {/* <input type="submit" value="Watch trailer"/> */}
                        </div>

                        <div className="section1-mini-poster">
                            <Link to={`/movie_NS/${data[num].id}`} key={data[num].id}>
                                <img src={`http://image.tmdb.org/t/p/original/${data[num].poster_path}`} />
                            </Link>

                        </div>

                    </div>
                </div>


            ) : (
                <div>No image found</div>
            )
            }
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
            <Footer />
        </div >

    );
}

export default Home
