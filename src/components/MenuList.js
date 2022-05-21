import React, {useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Cards from "./Cards"
import ItemForm from "./ItemForm"


function MenuList() {

    const [items, setItems] = useState([]);
    console.log(items);

// Add useEffect hook
    useEffect(() => {
        fetch("http://localhost:3001/coffies")
          .then((r) => r.json())
          .then((items) => setItems(items));
      }, []);


    function handleAddItem(newItem) {
        setItems([...items, newItem]);
    }


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





    const CardsItems = items.map((q) => <Grid key={q.id} item xs={3}>
        <Cards item={q} handleDeleteItem={handleDeleteItem} /></Grid>)
    return (
        <div>
            <ItemForm handleAddItem={handleAddItem} />
            <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
            >{CardsItems}</Grid>
            

        </div>


    );
}
export default MenuList