import React from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link} from "react-router-dom";

const styles = {
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    bottom: {
        color: '#FFFFFF'
    }
};

const AppHeader = (props) => {
    const {classes} = props;
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    <Button className={classes.bottom} component={Link} to="/">
                        ITCrowd . Hu
                    </Button>
                </Typography>
                <Button color="inherit">Login</Button>
                <Button component={Link} to="/search" color="inherit">Search</Button>
            </Toolbar>
        </AppBar>
    )
}


export default withStyles(styles)(AppHeader);
