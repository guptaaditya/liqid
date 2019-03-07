import React from "react";
import PropTypes from "prop-types";

export default function Answer(props) {
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
    onAnswer: PropTypes.func,
};