import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CurrentStep from '../components/CurrentStep/'
import SurveySummary from '../components/SurveySummary';

function RoutesList(props) {
    const { questions } = props;
    if(questions.length === 0) {
        return <h1>No questions in the survey</h1>
    }
    const { currentQuestionIndex } = props;

    return (
        <Router>
            <Switch>
                {
                    currentQuestionIndex && <Redirect exact path="/" to={`/${currentQuestionIndex}`} />
                }
                <Route exact path="/" render={
                    props => <Redirect exact path="/" to="/0" />
                } />
                <Route path="/summary" exact component={SurveySummary} />
               {
                   questions.map((q, questionIndex) => {
                        return (
                            <Route 
                                key={`route-index-${questionIndex}`}
                                path={`/:currentQuestionIndex`} 
                                render={
                                    props => {
                                        return <CurrentStep question={q} />
                                    }
                                } 
                            />
                        );
                   })
               }
            </Switch>
        </Router>
    );
};
export default connect(state => state)(RoutesList);