import React from "react";
import { Link } from "react-router-dom"
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    
    title: {
        flexGrow: 5
    }
}));


function NavBar() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/MenuList">Menulist</Link>
            <Link to="/ItemForm">ItemForm</Link>
        </nav>
        </Typography>
        </Toolbar>
      </AppBar>
    </div>

    );
}

export default NavBar;