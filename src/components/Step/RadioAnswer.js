import React from "react";
import PropTypes from "prop-types";

export default function RadioAnswer(props) {
    return (
        <div>
            {props.options.map((o, index) => (
                <React.Fragment key={index}>
                    <label>{o.text}</label>
                    <input type="radio" name={props.name} onChange={props.onChange} checked={props.value == o.value} value={o.value} />
                </React.Fragment>
            ))}
        </div>
    );
}

RadioAnswer.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};
