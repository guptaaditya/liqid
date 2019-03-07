export function saveAnswer(answer, questionId) {
    dispatch({
        type: "SAVE_ANSWER",
        payload: {
            answer,
            questionId
        }
    });
}

export function navigateToPreviousQuestion() {
    dispatch({
        type: "NAVIGATE_BACK"
    });
}