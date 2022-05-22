import React from "react";


function NavBar({onChangePage}) {
    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
   
    
    return (
        <nav>
            <a onClick={handleLinkClick} href="/">Home</a>
            <a onClick={handleLinkClick} href="/MenuList">Menulist</a>
            <a onClick={handleLinkClick} href="/ItemForm">ItemForm</a>
        </nav>
        
    );
}

export default NavBar;