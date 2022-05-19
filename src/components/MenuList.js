import React, { useState } from 'react';
import Cards from "./Cards"
import ItemForm from "./ItemForm"


function MenuList() {

    const [items, setItems] = useState([

    ]);

    function handleAddItem(newItem) {
        setItems([...items, newItem]);
    }


    // // Add useEffect hook
    // useEffect(() => {
    //     fetch("http://localhost:4000/items")
    //       .then((r) => r.json())
    //       .then((items) => setItems(items));
    //   }, []);

    const CardsItems = items.map((q) => (
        <Cards item={q} key={q.name} />))
    return (
        <div>
            <ItemForm handleAddItem={handleAddItem} />
            {CardsItems}

        </div>


    );
}
export default MenuList