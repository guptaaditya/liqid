import React from 'react';
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import CurrentStep from '../components/CurrentStep/'

function RoutesList(props) {
    const { questions } = props;
    if(questions.length === 0) {
        return <h1>No questions in the survey</h1>
    }
    const { currentQuestionIndex } = props;
    const questionIndexes = questions.map((q, index) => `${index}`);
    return (
        <Router initialEntries={questionIndexes} initialIndex={currentQuestionIndex || 0}>
           <Switch>
               {
                   questionIndexes.map(questionIndex => {
                        return (
                            <Route 
                                key={`route-index-${questionIndex}`}
                                path={questionIndex} 
                                render={
                                    props => {
                                        return <CurrentStep question={questions[questionIndex]} />
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