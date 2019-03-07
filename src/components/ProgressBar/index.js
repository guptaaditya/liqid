import React from "react";
import PropTypes from "prop-types";

export default function ProgressBar(props) {
    const progress = props.progress || 1;
    const width = `${progress}%`;
    return (
        <div style={{width: "100%", margin: "auto", border: "1px solid #ccc", height: "10px", borderRadius: "5px"}}>
            <div style={{width, backgroundColor: "green", height: "10px"}}></div>
        </div>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
};