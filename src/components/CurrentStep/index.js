import React from "react";

import Step from "../Step";

export default function CurrentStep({ question: { statement, type } }) {
    return (
        <Step statement={statement} type={type} />
    );
};