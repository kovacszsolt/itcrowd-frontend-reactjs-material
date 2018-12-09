import React, {Component} from 'react';
import AppList from "../list/list";
import Services from "../Services";
import './Front.css';

class AppFront extends Component {
    service = new Services();

    currentPage = 1;

    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            category: []
        }
    }

    componentDidMount() {
        this.readData();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('content');
        if (this.isBottom(wrappedElement)) {

            this.readData();
        }
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    readData() {
        this.componentWillUnmount();
        this.service.getTweets(this.currentPage).then((tweetListResult) => {
            const tmp = this.state.tweets;
            tmp.push(...tweetListResult);
            this.setState({
                'tweets': tmp
            });
            this.currentPage++;
            document.addEventListener('scroll', this.trackScrolling);
        });
    }

    render() {
        if (this.state.tweets.length === 0) {
            return null;
        } else {
            return (
                <AppList tweets={this.state.tweets}></AppList>
            );
        }

    }
}

export default (AppFront);

// <AppListCardCategory category={this.state.category}/>