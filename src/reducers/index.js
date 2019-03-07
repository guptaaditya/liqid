let initialState = {
    questions: [],
    lastAnsweredQuestionIndex: 0,
    currentQuestionIndex: 0,
};
export default reducer(state = initialState, action) {
    switch(action.type) {
        case "SAVE_ANSWER":
            let questions = [...state.questions];
            let lastAnsweredQuestionIndex;
            questions.find((q, index) => {
                if (q.id === acion.payload.questionId) {
                    lastAnsweredQuestionIndex = index;
                    return true;
                }
            }).answer = action.payload.answer;
            return {
                ...state,
                questions,
                lastAnsweredQuestionIndex,
                currentQuestionIndex: lastAnsweredQuestionIndex,
            };
        break;
        case "NAVIGATE_BACK":
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex - 1
            };
        break;
        default: 
            return state;
    }
}