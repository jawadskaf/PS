import {

    CREATE_FEEDBACK_STARTED,
    CREATE_FEEDBACK_SUCCESS,
    CREATE_FEEDBACK_ERROR,
  
  } from "../actions/feedbackk";
  
  const defaultState = {
    feedback: [],
    isLoading: false,
    createMessage: '',
    didCreate: false,
  };
  
  function feedbackReducer(state = defaultState, action) {
    switch (action.type) {
    
      case CREATE_FEEDBACK_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
          didCreate: false,
        });
      case CREATE_FEEDBACK_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: true,
          createMessage: action.payload.message,
        });
      case CREATE_FEEDBACK_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: false,
          createMessage: action.payload.message,
        });
  
      default:
        return state;
    }
  }
  
  export default feedbackReducer;
  