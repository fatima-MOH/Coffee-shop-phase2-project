
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ItemForm from "./ItemForm";
import MenuList from "./MenuList";

function App() {
    const [page, setPage] = useState("/")

    const [items, setItems] = useState([]);
    console.log(items);


    // Add useEffect hook
    useEffect(() => {
        fetch("http://localhost:3001/coffies")
            .then((r) => r.json())
            .then((items) => setItems(items));
    }, []);



    //handleDeleteItem

    function handleDeleteItem(id) {
        fetch(` http://localhost:3001/coffies/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => {
                const updatedQuestions = items.filter((item) => item.id !== id);
                setItems(updatedQuestions);
            })


    }
    //handleAddItem

    function handleAddItem(newItem) {
        setItems([...items, newItem]);
    }


    function handleUpdateItem(updatedItem) {
        const updatedItems = items.map((item) => {
          if (item.id === updatedItem.id) {
            return updatedItem;
          } else {
            return item;
          }
        });
        setItems(updatedItems);
      }







    return (

        <div>
            <NavBar onChangePage={setPage} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/MenuList">
                    <MenuList handleDeleteItem={handleDeleteItem} items={items} handleUpdateItem={handleUpdateItem}/>
                </Route>
                <Route path="/ItemForm">
                    <ItemForm handleAddItem={handleAddItem} />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
        </Route>

            </Switch>

        </div>
    );
}



export default App;