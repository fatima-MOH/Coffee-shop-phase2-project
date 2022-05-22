
import React,{ useState} from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import ItemForm from "./ItemForm";
import MenuList from "./MenuList";

function App() {
    const [page, setPage] = useState("/")
    
    function getCurrentPage() {
        switch(page) {
            case "/":
                return <Home />
            case "/MenuList":
                return <MenuList />
            case "/ItemForm":
                return <ItemForm />
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