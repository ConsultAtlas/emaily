import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'; //BrowserRouter is the brains of react router.
import { connect } from 'react-redux'; // react-redux makes react and redux work together nicely. this give certain functions the ability to call action creators.
import * as actions from '../actions';  // 

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App); // first argument is reserved for the mapStateToProps function, which we are not using. Then we pass in all the other actions we want to be able to use.
                                            // When we assign actions in the connect function, those actions get passed to App as props.