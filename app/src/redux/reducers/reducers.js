import { combineReducers } from 'redux';

import userReducer from './userReducer'
import medReducer from './medReducer'
import labReducer from './labReducer'
import healthcareReducer from './healthcareReducer'
import imageReducer from './imageReducer'
import dogReducer from './dogReducer'
import catReducer from './catReducer'
import lostpetsReducer from './lostpetsReducer'

const reducers = combineReducers({
  
   userReducer,
   medReducer,
   labReducer,
   healthcareReducer,
   imageReducer,
   dogReducer,
   catReducer,
   lostpetsReducer,

});

export default reducers;