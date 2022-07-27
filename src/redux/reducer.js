import { ADD_FEEDBACK} from "./actions"
import axios from "axios";

const initialState = {
    feedbacks: []
}

export const feedbackReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FEEDBACK: {
            return {...state, feedbacks: [...state.feedbacks, action.payload]}
        }
        default:
            return state
    }
}

export const saveFeedback = (data) => async () => {
    await axios.post("http://localhost:3000/feedbacks", data).then(function (response) {
        console.log(response);
    })

}

