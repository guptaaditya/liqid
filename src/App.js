import React from 'react';
import { connect } from "react-redux";
import CurrentStep from './components/CurrentStep';
import SurveySummary from './components/SurveySummary';

class App extends React.Component {
  render() {
    const { questions, currentQuestionIndex, submitted } = this.props;
    if(questions && questions.length === 0) {
        return <h1>No questions in the survey</h1>
    } else if (submitted) {
      return (
        <SurveySummary />
      )
    } else {
        return (
          <CurrentStep question={questions[currentQuestionIndex]}/>
        );
      }
  }
}

export default connect(state => state)(App);
