import React from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import AppListCard from "./card/Card";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});
const AppList = (props) => {
    const {classes} = props;
    return (
        <div id="content" className={classes.root}>
            <Grid container spacing={8}>
                {props.tweets.map((tweet) => {
                    return (
                        <Grid key={tweet._id}  item lg={3} sm={6} md={6} xs={12} >
                            <AppListCard tweet={tweet}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default withStyles(styles)(AppList);
