import { combineReducers } from 'redux';
import counter from "./counterReducer";
import posts from "./postReducer";
import cards from "./CardReducer";

const rootReducer = combineReducers({
    counter,
    posts,
    cards
});

export default rootReducer;
