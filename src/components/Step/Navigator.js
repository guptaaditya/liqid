import React from "react";
import PropTypes from "prop-types";
import { connect } from "redux";

function Navigator(props) {
    const flexContainer = {
        borderTop: "1px solid", 
        paddingTope: "20px", 
        display: "flex", 
        flex: 1, 
        justifyContent: "space-between",
    };
    return (
        <div style={flexContainer}>
            <button onClick={props.onBack}>Back</button>
            <button onClick={props.onNext}>Next</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { lastQuestionIndex: state.questions.length - 1 };
};
export default connect(mapStateToProps)(Navigator);

Navigator.propTypes = {
    onBack: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
};