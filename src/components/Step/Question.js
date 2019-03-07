import React from "react";
import PropTypes from "prop-types";

export default function Question(props) {
    return (
        <div>Question: {props.statement}</div>
    );
}

Question.defaultProps = { 
    statement: "",
};
Question.propTypes = {
    statement: PropTypes.string.isRequired
};