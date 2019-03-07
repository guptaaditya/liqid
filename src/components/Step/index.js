import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { saveAnswer, navigateToPreviousQuestion } from "../../actions/";
import Question from "./Question";
import Answer from "./Answer";
import Navigator from "./Navigator";
import ProgressBar from "../ProgressBar";
import Container from "../Container";

class Step extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            answer: null
        };
        this.onAnswer = this.onAnswer.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    onAnswer(e) {
        this.setState({ 
            answer:  e.target.value
        });
    }

    onNext() {
        if (this.state.answer) {
            this.props.saveAnswer(this.state.answer, this.props.qAnswered);
        } else {
            window.alert("Please answer the question");
        }
    }

    render() {
        return (
            <Container>
                <ProgressBar progress={this.props.progress} />
                <Question statement={this.props.statement} />
                <Answer type={this.props.type} onAnswer={this.onAnswer} />
                <Navigator onBack={this.props.navigateToPreviousQuestion} onNext={this.onNext} />
            </Container>
        );
    }
}
export default connect(state => {
    const qAnswered = state.lastAnsweredQuestionIndex;
    const progress = qAnswered ? (qAnswered)*100/state.questions.length : 2;
    return {
        qAnswered,
        progress,
    };
}, {
    saveAnswer,
    navigateToPreviousQuestion,
})(Step);

Step.propTypes = {
    statement: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};