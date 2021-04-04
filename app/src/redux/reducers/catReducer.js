import {

    GET_CAT_STARTED,
    GET_CAT_SUCCESS,
    GET_CAT_ERROR,

    CREATE_CAT_STARTED,
    CREATE_CAT_SUCCESS,
    CREATE_CAT_ERROR,
  
  } from "../actions/cats";
  
  const defaultState = {
    cat: [],
    isLoading: false,
    createMessage: '',
    didCreate: false,
  };
  
  function catReducer(state = defaultState, action) {
    switch (action.type) {
      case GET_CAT_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case GET_CAT_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          cat: action.payload.data,
        });
      case GET_CAT_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          cat: [],
        });
  
      case CREATE_CAT_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
          didCreate: false,
        });
      case CREATE_CAT_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: true,
          createMessage: action.payload.message,
        });
      case CREATE_CAT_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: false,
          createMessage: action.payload.message,
        });
  
      default:
        return state;
    }
  }
  
  export default catReducer;
  