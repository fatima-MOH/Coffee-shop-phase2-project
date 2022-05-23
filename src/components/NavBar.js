import React from "react";
import { Link } from "react-router-dom"


function NavBar() {


    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/MenuList">Menulist</Link>
            <Link to="/ItemForm">ItemForm</Link>
        </nav>

    );
}

export default NavBar;