import { combineReducers } from "redux";
import userReducer from './auth/reducer';
import messageReducer from './message/reducer';

const reducers = combineReducers({
    user: userReducer,
    message: messageReducer,
});

export default reducers;

