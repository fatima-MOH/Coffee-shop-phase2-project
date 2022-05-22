import React from 'react';
import { Grid } from '@material-ui/core';
import Cards from "./Cards"


function MenuList({ handleDeleteItem ,items }) {


  const CardsItems = items.map((q) => <Grid key={q.id} item xs={3}>
    <Cards item={q} handleDeleteItem={handleDeleteItem} /></Grid>)
  return (
    <div>

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