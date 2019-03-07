import React from "react";
import { saveAnswer, navigateToPreviousQuestion } from "actions/";
import Question from "./Question";
import Answer from "./Answer";
import Navigator from "./Navigator";

export default class Step extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            answer: null
        };
        this.onAnswer = this.onAnswer.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    onAnswer(answer) {
        this.state = { 
            value: answer
        };
    }

    onNext() {
        saveAnswer(this.state.answer);
    }

    render() {
        return (
            <Question statement={this.props.statement} />
            <Answer type={this.props.qType} onAnswer={this.onAnswer} />
            <Navigator onBack={navigateToPreviousQuestion} onNext={this.onNext} />
        );
    }
}