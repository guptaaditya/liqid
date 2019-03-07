import React from "react";
import { connect } from "react-redux";
import Container from "../Container";

function SurveySummary(props) {
    const summary = [...props.summary];
    summary.forEach(q => {
        if(q.type !== "text") {
            const optionSelected = q.options.find(a => a.value == q.answer);
            q.answerStatement = optionSelected.text;
        } else {
            q.answerStatement = q.answer;
        }
    });
    return (
        <Container>
            <h3><font color="green">Thank you for taking this survey</font></h3>
            <h5>Below is the summary:</h5>
            <ol>
                {summary.map((q, index) => (
                    <li key={index}>
                        <div>Question: {q.statement}</div>
                        <div>Answer: <b>{q.answerStatement}</b></div>
                    </li>
                ))}
            </ol>
        </Container>
    );
}
export default connect(state => ({ summary: state.questions }))(SurveySummary);