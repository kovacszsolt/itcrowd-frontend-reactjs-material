import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import withStyles from "@material-ui/core/es/styles/withStyles";


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function AppListSimple(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                {props.tweets.map((tweet) => {
                    return (
                        <ListItemLink key={tweet._id} href={'/'+tweet.slug}>
                            <ListItemText primary={tweet.title} />
                        </ListItemLink>
                    )
                })}
            </List>
        </div>
    );
}

export default withStyles(styles)(AppListSimple);
