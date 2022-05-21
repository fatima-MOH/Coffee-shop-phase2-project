
import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ItemForm from "./ItemForm";
import MenuList from "./MenuList";

function App() {
   
    
    return (
        <div>
            <NavBar />
            
                <Route path="/ItemForm">
                    <ItemForm/>
                </Route>
                <Route path="/Menulist">
                    <MenuList />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            
        </div>
    );
}

export default App;