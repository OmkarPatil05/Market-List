import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <h1>Market CheckList</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
            </div>
        </div>
    );
}

export default Navbar;