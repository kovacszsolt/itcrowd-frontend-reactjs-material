import React from 'react';
import AppListCardCategory from "../../list/category/Category";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import AppListSimple from "../../list/simple/Simple";

const styles = theme => ({
    card: {
        marginTop: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 1
    },
    media: {
        height: 200,
    },
});

const Content = (param) => {
    const classes = param.classes;
    const tweet = param.children.tweet;
    const categoryList = param.children.categoryList;
    console.log(categoryList);
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={9}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={tweet.imageurl}
                            title="Contemplative Reptile"
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
                        <Button fullWidth={true} variant="contained" href={tweet.url} color="primary">
                            Open the Content
                        </Button>
                    </Card>

                </Grid>
                <Grid item xs={3}>
                    <AppListSimple tweets={categoryList}/>
                </Grid>
            </Grid>
        </div>
    )
}

const AppTweetPage = (props) => {
    const Styled = withStyles(styles)(Content);
    return (
        <Styled>{props}</Styled>
    );
}
export default (AppTweetPage);

/*
const AppTweetPage = (props) => {
    return (
        <div className="container">
            <Helmet>
                <title>{props.tweet.title}</title>
                <meta name="description" content={props.tweet.content}/>
                <meta property="og:url"
                      content={window.location.href}/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content={props.tweet.title}/>
                <meta property="og:description" content={props.tweet.content}/>
                <meta property="og:image"
                      content={process.env.REACT_APP_IMAGE_URL + props.tweet.slug + "/size2.jpg"}/>
            </Helmet>
            <div className="row">
                <div className="col-md-8 pl-0 pr-0">
                    <img className="img-fluid" alt={props.tweet.title}
                         src={process.env.REACT_APP_IMAGE_URL + props.tweet.slug + "/size2.jpg"}/>
                    <h1>{props.tweet.title}</h1>
                    <AppListCardCategory category={props.tweet.twitter_category_full}/>
                    <p> {props.tweet.content}</p>
                    <a className="btn btn-info btn-block " target={"_blank"} href={props.tweet.url}>jump
                        to the
                        article</a>
                </div>
                <div className="col-md-4 mt-4">
                    <AppListSimple tweets={props.categoryList}></AppListSimple>
                </div>
            </div>
        </div>
    )
}
export default (AppTweetPage);
*/
