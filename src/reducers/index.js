import questions from "../mockData";

let initialState = {
    questions,
    lastAnsweredQuestionIndex: 0,
    currentQuestionIndex: 0,
    submitted: false
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "SAVE_ANSWER":
            let questions = [...state.questions];
            let lastAnsweredQuestionIndex;
            let question = questions.find((q, index) => {
                if (index === action.payload.questionId) {
                    lastAnsweredQuestionIndex = index;
                    return true;
                }
                return false;
            });
            question.answer = action.payload.answer;
            let currentQuestionIndex = lastAnsweredQuestionIndex + 1;
            let submitted = state.submitted;
            if (lastAnsweredQuestionIndex === questions.length - 1) { //last question
                currentQuestionIndex = lastAnsweredQuestionIndex;
                submitted = true;
            }
            return {
                ...state,
                questions,
                lastAnsweredQuestionIndex,
                currentQuestionIndex,
                submitted,
            };
        case "NAVIGATE_BACK":
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex - 1
            };
        case "SUBMIT":
            return {
                ...state,
                submitted: true,
            }
        default: 
            return state;
    }
}