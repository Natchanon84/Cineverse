import { Link } from "react-router-dom"
import img from "../../img/404notfound.jpg"
import "./NotFound.css"

function NotFound() {

    return (
        <div className="notFound">
            <Link to="/" ><img src={img} /></Link>

        </div>
    )
}

export default NotFound