import React, {Component, Fragment} from 'react';
import AppList from "../list/list";
import Services from "../Services";
import {Helmet} from "react-helmet";

class AppTag extends Component {
    service = new Services();

    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            category: []
        }
    }

    componentDidMount() {
        this.service.getTweetsByCategorySlug(this.props.match.params.slug).then((getTweetsByCategoryResult) => {
            this.setState({
                'tweets': getTweetsByCategoryResult
            });
        });
        this.service.getCategory().then((categoryListResult) => {
            this.setState({
                'category': categoryListResult
            });
        });
    }

    render() {
        if (this.state.tweets.length === 0) {
            return null;
        } else {
            return (
                <Fragment>
                    <Helmet>
                        <title>{"IT Crowd . Hu - " + this.props.match.params.slug}</title>
                        <meta name="description" content={"IT Crowd . Hu - Tags - " + this.props.match.params.slug}/>
                        <meta property="og:url"
                              content={window.location.href}/>
                        <meta property="og:type" content="article"/>
                        <meta property="og:title" content={"IT Crowd . Hu - " + this.props.match.params.slug}/>
                        <meta property="og:description"
                              content={"IT Crowd . Hu - Tags - " + this.props.match.params.slug}/>
                        <meta property="og:image"
                              content="https://itcrowd.hu/logo.png"/>
                    </Helmet>
                    <AppList tweets={this.state.tweets}></AppList>
                </Fragment>
            );
        }

    }
}

export default (AppTag);
