import React, {Component, Fragment} from 'react';
import ReactGA from 'react-ga';
import './App.css';
import './front/Front'
import Front from "./front/Front";
import Search from "./search/Search";
import Header from "./header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Tweet from "./tweet/Tweet";
import Tag from "./tag/Tag";
import {Helmet} from "react-helmet";

class App extends Component {

    render() {
        ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY);
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <Fragment>
                <Helmet>
                    <meta name="google-site-verification" content={process.env.REACT_APP_GOOGLE_SITE_VERIFICATION}/>
                </Helmet>
                <Router>
                    <div id="wrapper">
                        <Header/>
                        <Switch>
                            <Route path="/" exact component={Front}/>
                            <Route path="/search" exact component={Search}/>
                            <Route path="/search/:searchtext" exact component={Search}/>
                            <Route path="/tag/:slug" exact component={Tag}/>
                            <Route path="/:slug" exact component={Tweet}/>

                        </Switch>
                    </div>
                </Router>
            </Fragment>
        )
    }
}

export default App;
