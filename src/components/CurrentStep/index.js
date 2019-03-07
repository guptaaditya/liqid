import React from "react";

import Step from "../Step";

export default function CurrentStep({ question: { statement, type, answer, options } }) {
    return (
        <Step answerOptions={options} statement={statement} type={type} answer={answer || ""} />
    );
};