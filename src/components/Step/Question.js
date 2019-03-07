import React from "react";
import PropTypes from "prop-types";

export default function Question(props) {
    return (
        <div style={{marginTop: "20px"}}>Question: {props.statement}</div>
    );
}

Question.defaultProps = { 
    statement: "",
};
Question.propTypes = {
    statement: PropTypes.string.isRequired
};