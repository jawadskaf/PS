import {

    GET_LAB_STARTED,
    GET_LAB_SUCCESS,
    GET_LAB_ERROR,

    CREATE_LAB_STARTED,
    CREATE_LAB_SUCCESS,
    CREATE_LAB_ERROR,

    DELETE_LAB_STARTED,
    DELETE_LAB_SUCCESS,
    DELETE_LAB_ERROR,

    UPDATE_LAB_STARTED,
    UPDATE_LAB_SUCCESS,
    UPDATE_LAB_ERROR,
  
  } from "../actions/lab";
  
  const defaultState = {
    labs: [],
    isLoading: false,
    delMessage: '',
    createMessage: '',
    updateMessage:'',
    didCreate: false,
  };
  
  function labReducer(state = defaultState, action) {
    switch (action.type) {
      case GET_LAB_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case GET_LAB_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          labs: action.payload.data,
        });
      case GET_LAB_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          labs: [],
        });
  
      case CREATE_LAB_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
          didCreate: false,
        });
      case CREATE_LAB_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: true,
          createMessage: action.payload.message,
        });
      case CREATE_LAB_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: false,
          createMessage: action.payload.message,
        });
  
      case DELETE_LAB_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case DELETE_LAB_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          delMessage: 'DELETED SUCCESSFULLY',
        });
      case DELETE_LAB_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          delMessage: 'UNABLE TO DELETE.',
        });

        case UPDATE_LAB_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case UPDATE_LAB_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          updateMessage: 'UPDATE SUCCESSFULLY',
        });
      case UPDATE_LAB_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          updateMessage: 'UNABLE TO UPDATE',
        });
      default:
        return state;
    }
  }
  
  export default labReducer;
  