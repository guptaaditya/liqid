const questions = [
    {
        id: 1,
        type: "text",
        statement: "What is your name? Please provide your full name",
    },
    {
        id: 2,
        type: "text",
        statement: "What is your age?",
    },
    {
        id: 3,
        type: "text",
        statement: "Which technical blogs do you follow? Name some of them.",
    },
    {
        id: 4,
        type: "radio",
        statement: "Select your gender?",
        options: [
            {text: "Male", value: 1},
            {text: "Female", value: 2},
        ],
    }
];
export default questions;