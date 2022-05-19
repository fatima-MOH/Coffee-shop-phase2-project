import  React from 'react';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

 function Cards({item}) {
  return (
      
    <Card style={{ maxWidth: 400, 
        paddingBottom:12,
        paddingTop:40 }}
        >
           

      <CardMedia
        component="img"
        height="350"
        image ={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">add to cart</Button>
        <Button size="small">delete</Button>
      </CardActions>
    </Card>
  );
}
export default Cards