
import React,{useEffect, useState} from "react";
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


    
    function getCurrentPage() {
        switch(page) {
            case "/":
                return <Home />
            case "/MenuList":
                return <MenuList  handleDeleteItem={handleDeleteItem} items={items}/>
            case "/ItemForm":
                return <ItemForm handleAddItem={handleAddItem}/>
            default:
                return <h1>404 not found</h1>
        }
    }
    
   
    
    return (
        
           <div>
    <NavBar onChangePage={setPage} />
    {getCurrentPage()}
</div>
);
}
            
            

export default App;