import React from "react";
import { Link } from "react-router-dom"
import { makeStyles, AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },

    title: {
        flexGrow: 5
    }
}));


function NavBar() {
    const classes = useStyles();


    return (


        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h6" className={classes.logo}>
                    <h3 className={classes.title}> The Friendly Bean Coffee Shope</h3>
                </Typography>
                <div className={classes.navlinks} >
                    <nav>
                        <Link to="/"className={classes.link}>Home</Link>
                        <Link to="/ItemForm"className={classes.link}>ItemForm</Link>
                        <Link to="/MenuList"className={classes.link}>Menulist</Link>
                    </nav>
                </div>

            </Toolbar>
        </AppBar>


    );
}

export default NavBar;