import React from 'react';
import './Card.css';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import AppListCardCategory from "../category/Category";

const styles = theme => ({
    card: {
        maxWidth: 450,
        marginTop: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 1
    },
    media: {
        height: 250,
    },
});

const AppListCard = (props) => {
    const Styled = withStyles(styles)(Content);
    return (
        <Styled>{props}</Styled>
    );
}

const openContent = (tweet) => {
    window.location.href = '/' + tweet.slug;
}

const Content = (param) => {
    const classes = param.classes;
    const tweet = param.children.tweet;
    return (
        <Card className={classes.card} onClick={() => openContent(tweet)}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="{tweet.title}"
                    className={classes.media}
                    height="140"
                    image={process.env.REACT_APP_IMAGE_URL + tweet.slug + "/size1.jpg"}
                    title="{tweet.title}"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {tweet.title}
                    </Typography>
                    <AppListCardCategory category={tweet.twitter_category_full}/>
                    <Typography component="p">
                        {tweet.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default AppListCard;