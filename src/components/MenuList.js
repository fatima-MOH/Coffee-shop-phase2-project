import React from 'react';
import { Grid } from '@material-ui/core';
import Cards from "./Cards"


function MenuList({ handleDeleteItem, items, handleUpdateItem }) {


  const CardsItems = items.map((q) => <Grid key={q.id} item xs={3}>
    <Cards item={q} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} /></Grid>)
  return (
    <div>

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >{CardsItems}</Grid>


    </div>


  );
}
export default MenuList