import {

    GET_DOG_STARTED,
    GET_DOG_SUCCESS,
    GET_DOG_ERROR,

    CREATE_DOG_STARTED,
    CREATE_DOG_SUCCESS,
    CREATE_DOG_ERROR,
  
  } from "../actions/dogs";
  
  const defaultState = {
    dog: [],
    isLoading: false,
    createMessage: '',
    didCreate: false,
  };
  
  function dogReducer(state = defaultState, action) {
    switch (action.type) {
      case GET_DOG_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case GET_DOG_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          dog: action.payload.data,
        });
      case GET_DOG_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          dog: [],
        });
  
      case CREATE_DOG_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
          didCreate: false,
        });
      case CREATE_DOG_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: true,
          createMessage: action.payload.message,
        });
      case CREATE_DOG_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: false,
          createMessage: action.payload.message,
        });
  
      default:
        return state;
    }
  }
  
  export default dogReducer;
  