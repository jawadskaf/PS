import {
    
    GET_HEALTHCARE_STARTED,
    GET_HEALTHCARE_SUCCESS,
    GET_HEALTHCARE_ERROR,

    CREATE_HEALTHCARE_STARTED,
    CREATE_HEALTHCARE_SUCCESS,
    CREATE_HEALTHCARE_ERROR,

    DELETE_HEALTHCARE_STARTED,
    DELETE_HEALTHCARE_SUCCESS,
    DELETE_HEALTHCARE_ERROR,

    UPDATE_HEALTHCARE_STARTED,
    UPDATE_HEALTHCARE_SUCCESS,
    UPDATE_HEALTHCARE_ERROR,
  
  } from "../actions/healthcare";
  
  const defaultState = {
    healthcare: [],
    isLoading: false,
    delMessage: '',
    createMessage: '',
    updateMessage:'',
    didCreate: false,
  };
  
  function healthcareReducer(state = defaultState, action) {
    switch (action.type) {
      case GET_HEALTHCARE_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case GET_HEALTHCARE_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          healthcare: action.payload.data,
        });
      case GET_HEALTHCARE_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          healthcare: [],
        });
  
      case CREATE_HEALTHCARE_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
          didCreate: false,
        });
      case CREATE_HEALTHCARE_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: true,
          createMessage: action.payload.message,
        });
      case CREATE_HEALTHCARE_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: false,
          createMessage: action.payload.message,
        });
  
      case DELETE_HEALTHCARE_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case DELETE_HEALTHCARE_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          delMessage: 'DELETED SUCCESSFULLY',
        });
      case DELETE_HEALTHCARE_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          delMessage: 'UNABLE TO DELETE.',
        });

        case UPDATE_HEALTHCARE_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case UPDATE_HEALTHCARE_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          updateMessage: 'UPDATE SUCCESSFULLY',
        });
      case UPDATE_HEALTHCARE_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          updateMessage: 'UNABLE TO UPDATE',
        });
      default:
        return state;
    }
  }
  
  export default healthcareReducer;
  