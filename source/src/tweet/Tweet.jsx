import React, {Component} from 'react';
import AppTweetPage from "./Page/TweetPage";
import Services from "../Services";


class AppTweet extends Component {
    service = new Services();

    constructor(props) {
        super(props);
        console.log('AppTweet.constructor');
        this.state = {
            tweet: null,
            categoryList: null
        }
    }

    componentWillReceiveProps(nextProps) {
        this.readData(nextProps.match.params.slug);
    }

    readData(slug) {
        this.service.getTweet(slug).then((getTweetsBySlugResult) => {
            let tweetList = [];
            getTweetsBySlugResult.twitter_category_full.forEach((category) => {
                tweetList = tweetList.concat(category.tweets);
            });
            const categoryTweetList = [];
            tweetList.forEach((tweet) => {
                if ((categoryTweetList.find(categoryTweet => categoryTweet._id === tweet._id) === undefined) && (getTweetsBySlugResult._id !== tweet._id)) {
                    categoryTweetList.push(tweet);
                }
            });

            this.setState({
                'tweet': getTweetsBySlugResult,
                'categoryList': categoryTweetList
            });
        });
    }

    componentDidMount() {
        this.readData(this.props.match.params.slug);
    }

    render() {

        if (this.state.tweet === null) {
            return null;
        } else {
            return (
                <AppTweetPage tweet={this.state.tweet}
                              categoryList={this.state.categoryList}></AppTweetPage>
            );
        }

    }
}

export default (AppTweet);
