import React from 'react';
import {Card,CardActions,CardContent,Button,CardMedia,Typography }from "@material-ui/core";


function Cards({ item , handleDeleteItem }) {

    const{id, description,name,image,price}=item


function handleDeleteClick() {
    handleDeleteItem(id)
  
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
                <Button size="small">{item.isInCart ? "Remove From" : "Add to"}</Button>
                <Button size="small" onClick={handleDeleteClick}>delete</Button>
            </CardActions>
        </Card>
    );
}
export default Cards