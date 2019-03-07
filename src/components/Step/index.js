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

    componentWillReceiveProps(nextProps) {
        if (this.props.answer !== nextProps.answer) {
            this.setState({answer: nextProps.answer});
        }
    }

    onAnswer(e) {
        this.setState({ 
            answer:  e.target.value
        });
    }

    onNavigate(direction) {
        if (this.state.answer) {
            if (direction === "next")
                this.props.saveAnswer(this.state.answer, this.props.qAnswered);
            else
                this.props.navigateToPreviousQuestion();
        } else {
            window.alert("Please answer the question");
        }
    }

    render() {
        return (
            <Container>
                <ProgressBar progress={this.props.progress} />
                <Question statement={this.props.statement} />
                <Answer type={this.props.type} onAnswer={this.onAnswer} answer={this.state.answer} />
                <Navigator onBack={e => this.onNavigate("back")} onNext={e => this.onNavigate("next")} />
            </Container>
        );
    }
}
export default connect(state => {
    const qAnswered = state.currentQuestionIndex;
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
    answer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    statement: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};