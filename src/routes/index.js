import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CurrentStep from '../components/CurrentStep/'
import SurveySummary from '../components/SurveySummary';

function findLastIndexOfAnsweredQuestion(questions) {
    let qReversed = [...questions].reverse();
    let index = qReversed.findIndex(q => {
        if (q.answer) return true;
        return false;
    });
    if(!index && index !== 0) index = 0
    else index = questions.length - index - 1;
    return index;
}

function RoutesList(props) {
    const { questions } = props;
    if(questions.length === 0) {
        return <h1>No questions in the survey</h1>
    }
    const answeredlastIndex = findLastIndexOfAnsweredQuestion(questions);
    const defaultQuestion = `/${answeredlastIndex}`;
    if (answeredlastIndex === questions.length - 1) {
        return <SurveySummary />
    }
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={
                    props => <Redirect exact path="/" to={defaultQuestion} />
                }/>
                <Route path="/summary" exact component={SurveySummary} />
                <Route 
                    path={`/:questionIndex`} 
                    render={
                        props => {
                            const q = questions[props.match.params.questionIndex];
                            if (!q) {
                                props.history.push("/") ;
                                return null;
                            }
                            return <CurrentStep question={q} />
                        }
                    } 
                />
            </Switch>
        </Router>
    );
};
export default connect(state => ({questions: state.questions}))(RoutesList);