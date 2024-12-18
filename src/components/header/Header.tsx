import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (  
        <header>
            <h2>My Life</h2>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/blog'}>Blog</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;