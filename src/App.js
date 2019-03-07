import React from 'react';
import { connect } from "react-redux";
import CurrentStep from './components/CurrentStep';

class App extends React.Component {
  render() {
    const { questions, currentQuestionIndex } = this.props;
    if(questions && questions.length === 0) {
        return <h1>No questions in the survey</h1>
    }
    return (
      <CurrentStep question={questions[currentQuestionIndex]}/>
    );
  }
}

export default connect(state => state)(App);
