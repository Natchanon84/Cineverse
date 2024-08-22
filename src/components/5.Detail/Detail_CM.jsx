import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Detail({ data_CM }) {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [backdrop, setBackdrop] = useState("");

    useEffect(() => {
        const result = data_CM.find((result) => result.id === parseInt(id))

        console.log(result);

        setTitle(result.original_title)
        setImage(result.poster_path)
        setContent(result.overview)
        setDate(result.release_date)
        setBackdrop(result.backdrop_path)
        // eslint-disable-next-line

    }, [id]);

    return (
        <div className="container-detail">
            <img className=" backdrop" src={`http://image.tmdb.org/t/p/original/${backdrop}`} />
            <div className="overviewbox">
                <div className="overviewbox-img">
                    <img className="poster" src={`http://image.tmdb.org/t/p/w1280/${image}`} />
                </div>
                <div className="overviewbox-content">

                    <div className="content-1">
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <h6>{date}</h6>
                    </div>

                    <div className="content-2">
                        <Link to='/movies'>
                            <button className="overview-button">BACK</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Detail;
