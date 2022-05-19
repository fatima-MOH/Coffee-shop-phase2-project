import  React,{useState} from 'react';
import Cards from "./Cards"
import ItemForm from "./ItemForm"


 function MenuList() {

    const [items, setItems] = useState([

    ]);


    // // Add useEffect hook
    // useEffect(() => {
    //     fetch("http://localhost:4000/items")
    //       .then((r) => r.json())
    //       .then((items) => setItems(items));
    //   }, []);

    const CardsItems = items.map((q) => (
        <Cards item={q} />))
  return (
      <div>
          <ItemForm/>
          {CardsItems}

      </div>
      
    
  );
}
export default MenuList