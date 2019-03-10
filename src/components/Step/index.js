import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
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
            answer: props.answer || "",
        };
        this.onAnswer = this.onAnswer.bind(this);
        this.onNavigate = this.onNavigate.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.answer !== nextProps.answer) {
            this.setState({ answer: nextProps.answer });
        }
    }

    onAnswer(e) {
        this.setState({ 
            answer:  e.target.value,
        });
    }

    onNavigate(direction) {
        if (direction === "next") {
            if (this.state.answer) {
                const qAnswered = Number(this.props.match.params.questionIndex);
                const lastQuestion = qAnswered === (this.props.totalQuestions - 1) ? true : false;
                this.props.saveAnswer(this.state.answer, qAnswered);
                this.setState({ answer: "" }); 
                let historyString   =   lastQuestion ? "/summary" : "/"+ (qAnswered + 1); 
                this.props.history.push(historyString);
            } else {
                window.alert("Please answer the question");
                return;
            }
        }
        else{
            this.props.navigateToPreviousQuestion();
            this.props.history.goBack();
        }
    }

    render() {
        const qAnswered = Number(this.props.match.params.questionIndex);
        const firstQuestion = qAnswered === 0 ? true : false;
        const lastQuestion = qAnswered === (this.props.totalQuestions - 1) ? true : false;
        const progress = qAnswered ? qAnswered * 100/this.props.totalQuestions : 2;
        return (
            <Container>
                <ProgressBar progress={progress} />
                <Question statement={this.props.statement} />
                <Answer 
                    name={`questionid-${qAnswered}`} 
                    type={this.props.type} 
                    onAnswer={this.onAnswer} 
                    answer={this.state.answer}
                    options={this.props.answerOptions} 
                />
                <Navigator 
                    onBack={() => this.onNavigate("back")} 
                    onNext={() => this.onNavigate("next")} 
                    firstQuestion={firstQuestion}
                    lastQuestion={lastQuestion}
                />
            </Container>
        );
    }
}
export default connect(state => {
    return {
        totalQuestions: state.questions.length,
    };
}, {
    saveAnswer,
    navigateToPreviousQuestion,
})(withRouter(Step));

Step.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    statement: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    answerOptions:PropTypes.arrayOf(PropTypes.object),
};