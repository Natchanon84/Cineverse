import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar() {

    return (
        <nav className="navbar px-5 ">
            <Link to="/" >Logo TMDB</Link>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/tv">Tv Shows</Link>
        </nav>
    )
}

export default Navbar