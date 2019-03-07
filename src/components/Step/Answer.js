import React from "react";
import PropTypes from "prop-types";
import RadioAnswer from "./RadioAnswer";

export default function Answer(props) {
    if (props.type === "text") {
        return (
            <div style={{marginTop: "20px"}}>
                <input type="text" value={props.answer} onChange={(e) => props.onAnswer(e, props.type)} style={{width: "100%"}} placeholder="Please write you answer here" />
            </div>
        );
    }
    if (props.type === "radio") {
        return (
            <div style={{marginTop: "20px"}}>
                <RadioAnswer value={props.answer} name={props.name} options={props.options} onChange={(e) => props.onAnswer(e, props.type)} />
            </div>
        );
    }
    if (props.type === "text") {
        return (
            <div style={{marginTop: "20px"}}>
                <input type="text" value={props.answer} onChange={(e) => props.onAnswer(e, props.type)} style={{width: "100%"}} placeholder="Please write you answer here" />
            </div>
        );
    }
    return null;
};

Answer.propTypes = {
    answer: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onAnswer: PropTypes.func.isRequired,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};