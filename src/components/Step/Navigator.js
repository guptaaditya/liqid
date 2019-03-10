import React from "react";
import PropTypes from "prop-types";

export default function Navigator(props) {
    const flexContainer = {
        marginTop: "20px",
        borderTop: "1px solid", 
        paddingTop: "20px", 
    };
    return (
        <div style={flexContainer}>
            {!props.firstQuestion && <button style={{float: "left"}} onClick={props.onBack}>Back</button> }
            {!props.lastQuestion && <button style={{ float: "right" }} onClick={props.onNext}>Next</button> }
            {props.lastQuestion && <button style={{float: "right"}} onClick={props.onNext}>Submit</button>}
        </div>
    );
};

Navigator.propTypes = {
    onBack: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    firstQuestion: PropTypes.bool.isRequired,
    lastQuestion: PropTypes.bool.isRequired,
};