import { legacy_createStore as createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {feedbackReducer} from "./reducer";

const store = createStore(feedbackReducer, applyMiddleware(thunk))

export default store;