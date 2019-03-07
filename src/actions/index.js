export function saveAnswer(answer, questionId) {
    return {
        type: "SAVE_ANSWER",
        payload: {
            answer,
            questionId
        }
    };
}

export function navigateToPreviousQuestion() {
    return {
        type: "NAVIGATE_BACK"
    };
}