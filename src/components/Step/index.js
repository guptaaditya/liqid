import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveAnswer, navigateToPreviousQuestion } from "../../actions/";
import Question from "./Question";
import Answer from "./Answer";
import Navigator from "./Navigator";
import ProgressBar from "../ProgressBar";
import Container from "../Container";

class Step extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: props.answer || ""
        };
        this.onAnswer = this.onAnswer.bind(this);
        this.onNavigate = this.onNavigate.bind(this);
    }

    onAnswer(e) {
        this.setState({ 
            answer:  e.target.value
        });
    }

    onNavigate(direction) {
        if (direction === "next") {
            if (this.state.answer) {
                this.props.saveAnswer(this.state.answer, this.props.qAnswered);
                this.setState({ answer: "" });
            } else {
                window.alert("Please answer the question");
                return;
            }
        }
        else
            this.props.navigateToPreviousQuestion();
    }

    render() {
        return (
            <Container>
                <ProgressBar progress={this.props.progress} />
                <Question statement={this.props.statement} />
                <Answer 
                    name={`questionid-${this.props.qAnswered}`} 
                    type={this.props.type} 
                    onAnswer={this.onAnswer} 
                    answer={this.state.answer}
                    options={this.props.answerOptions} 
                />
                <Navigator onBack={e => this.onNavigate("back")} onNext={e => this.onNavigate("next")} />
            </Container>
        );
    }
}
export default connect(state => {
    const qAnswered = state.currentQuestionIndex;
    const progress = qAnswered ? (qAnswered)*100/state.questions.length : 2;
    let lastQuestion = state.currentQuestionIndex === (state.questions.length - 1) ? true : false;
    return {
        qAnswered,
        progress,
        lastQuestion,
    };
}, {
    saveAnswer,
    navigateToPreviousQuestion,
})(Step);

Step.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    statement: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    answerOptions:PropTypes.arrayOf(PropTypes.object),
};