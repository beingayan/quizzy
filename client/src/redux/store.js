import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import questionReducer from './question_reducer';
import resultReducer from './result_reducer';
import auth_reducer from './auth_reducer';

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer,
    auth:auth_reducer
})

/** create store with reducer */
export default configureStore({ reducer : rootReducer});