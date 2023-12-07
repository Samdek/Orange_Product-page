import { Link, NavLink } from "react-router-dom";
import "../App.css"
import { useState } from "react";

function Header() {

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow((prevShow) => prevShow = !prevShow)
    }

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return ( 
        <header>
            <Link to="/" className="logo">
                <span>#ORstore</span>
            </Link>
            <div className="hamburger" onClick={handleShow}>
                <svg viewBox="0 0 100 80" width="40" height="18">
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            </div>
            <nav>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/product"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Products
                </NavLink>
                <NavLink
                    to="https://www.github.com/Samdek"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Contact us
                </NavLink>
                
            </nav>

            <div className={!show && "showStyle"} id="mobile-nav">
                <div className="mhamburger" onClick={handleShow}>
                    <svg viewPort="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"/>
                        <line x1="1" y1="1" x2="11" y2="11" stroke="black"  stroke-width="2"/>
                    </svg>
                </div>
                <NavLink
                     onClick={handleShow}
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    onClick={handleShow}
                    to="/product"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Products
                </NavLink>
                <NavLink
                    onClick={handleShow}
                    to="https://www.github.com/Samdek"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Contact us
                </NavLink>
            </div>
        </header>
     );
}

export default Header;