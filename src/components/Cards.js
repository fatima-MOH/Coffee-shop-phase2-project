import React from 'react';
import {Card,CardActions,CardContent,Button,CardMedia,Typography }from "@material-ui/core";


function Cards({ item , handleDeleteItem,handleUpdateItem }) {

    const{id, description,name,image,price}=item


function handleDeleteClick() {
    handleDeleteItem(id)
  
  }

  function handleAddToCartClick() {
  
    fetch(`http://localhost:3001/coffies/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => handleUpdateItem(updatedItem));
  }


    return (

        <Card 
        >


            <CardMedia
                component="img"
                height="350"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {description}
                </Typography>
                <Typography>
                {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" className={item.isInCart ? "remove" : "add"}  onClick={handleAddToCartClick}>
                    {item.isInCart ? "Remove From" : "Add to"}</Button>
                <Button size="small" onClick={handleDeleteClick}>delete</Button>
            </CardActions>
        </Card>
    );
}
export default Cards