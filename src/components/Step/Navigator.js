import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Navigator(props) {
    const flexContainer = {
        marginTop: "20px",
        borderTop: "1px solid", 
        paddingTop: "20px", 
    };
    return (
        <div style={flexContainer}>
            {!props.firstQuestion && <button style={{float: "left"}} onClick={props.onBack}>Back</button>}
            {!props.lastQuestion && <button style={{float: "right"}} onClick={props.onNext}>Next</button>}
            {props.lastQuestion && <button style={{float: "right"}} onClick={props.onNext}>Submit</button>}
        </div>
    );
};

const mapStateToProps = state => {
    let firstQuestion = state.currentQuestionIndex === 0 ? true : false;
    let lastQuestion = state.currentQuestionIndex === (state.questions.length - 1) ? true : false;
    return { 
        firstQuestion,
        lastQuestion
    };
};
export default connect(mapStateToProps)(Navigator);

Navigator.propTypes = {
    onBack: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
};