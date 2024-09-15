import { Link } from "react-router-dom";

export default function Header (){
    return(
        <>
        <header >
            <h1 className="goat">Logo</h1>
            <nav>
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/about" className="link">About Us</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}


