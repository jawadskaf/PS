import { combineReducers } from 'redux';

import userReducer from './userReducer'
import imageReducer from './imageReducer'
import dogReducer from './dogReducer'
import catReducer from './catReducer'
import lostpetsReducer from './lostpetsReducer'
import feedbackReducer from './feedbackReducer'

const reducers = combineReducers({
  
   userReducer,
   imageReducer,
   dogReducer,
   catReducer,
   lostpetsReducer,
   feedbackReducer,

});

export default reducers;