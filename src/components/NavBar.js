import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
   
    
    return (
        <nav>
            <NavLink excat to href="/">Home</NavLink>
            <NavLink excat to href="/ItemForm">ItemForm</NavLink>
            <NavLink excat to href="/MenuList">MenuList</NavLink>
        </nav>
    );
}

export default NavBar;