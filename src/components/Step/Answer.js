import React from "react";
import PropTypes from "prop-types";

export default function Answer(props) {
    if (type === "text") {
        return <input type="text" onChange={props.onAnswer} />;
    }
};

Answer.propTypes = {
    type: PropTypes.string.isRequired,
    onAnswer: PropTypes.func,
};