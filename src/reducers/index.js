import questions from "../mockData";

let initialState = {
    questions,
    lastAnsweredQuestionIndex: 0,
    currentQuestionIndex: 0
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "SAVE_ANSWER":
            let questions = [...state.questions];
            let lastAnsweredQuestionIndex;
            const question = questions.find((q, index) => {
                if (q.id === action.payload.questionId) {
                    lastAnsweredQuestionIndex = index;
                    return true;
                }
                return false;
            });
            question.answer = action.payload.answer;
            return {
                ...state,
                questions,
                lastAnsweredQuestionIndex,
                currentQuestionIndex: lastAnsweredQuestionIndex,
            };
        case "NAVIGATE_BACK":
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex - 1
            };
        default: 
            return state;
    }
}