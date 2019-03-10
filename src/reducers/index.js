import questions from "../mockData";

let initialState = {
    questions,
    submitted: false
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "SAVE_ANSWER":
            let questions = [...state.questions];
            let question = questions.find((q, index) => {
                if (index === action.payload.questionId) {
                    return true;
                }
                return false;
            });
            question.answer = action.payload.answer;
            let submitted = state.submitted;
            if (action.payload.questionId === questions.length - 1) { //last question
                submitted = true;
            }
            return {
                ...state,
                questions,
                submitted,
            };
        case "NAVIGATE_BACK":
            return {
                ...state,
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