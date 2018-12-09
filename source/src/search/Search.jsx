import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AppListCard from "../list/card/Card";
import Services from "../Services";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class AppSearch extends React.Component {
    service = new Services();
    state = {
        search: '',
        tweetList: [],
        searchTitle: 'Search (0)'
    };

    componentDidMount() {
        if (this.props.match.params.searchtext !== undefined) {
            this.setState({search: this.props.match.params.searchtext});
            this.readData(this.props.match.params.searchtext);
        }
    }

    readData(searchText) {
        if (searchText.length > 3) {
            this.service.search(searchText).then((tweetListResult) => {
                this.setState({
                    'tweetList': tweetListResult,
                    'searchTitle': 'Search (' + tweetListResult.length + ')'
                });
            });
        }
    }

    handleChange(event) {
        this.setState({search: event.target.value});
        this.props.history.push('/search/' + event.target.value);
        this.readData(event.target.value);
    }

    render() {
        const {classes} = this.props;
        return (
            <div id="content" className={classes.root}>
                <Grid container spacing={8}>
                    <TextField
                        id="outlined-name"
                        label={this.state.searchTitle}
                        className={classes.textField}
                        value={this.state.search}
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => {
                            this.handleChange(e)
                        }}
                    />
                </Grid>
                <Grid container spacing={8}>
                    {this.state.tweetList.map((tweet) => {
                        return (
                            <Grid key={tweet._id} item lg={3} sm={6} md={6} xs={12}>
                                <AppListCard tweet={tweet}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(AppSearch);
