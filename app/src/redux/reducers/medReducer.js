import {
    GET_MEDS_STARTED,
    GET_MEDS_SUCCESS,
    GET_MEDS_ERROR,

    CREATE_MEDS_STARTED,
    CREATE_MEDS_SUCCESS,
    CREATE_MEDS_ERROR,

    DELETE_MEDS_STARTED,
    DELETE_MEDS_SUCCESS,
    DELETE_MEDS_ERROR,

    UPDATE_MEDS_STARTED,
    UPDATE_MEDS_SUCCESS,
    UPDATE_MEDS_ERROR,
  
  } from "../actions/medicine";
  
  const defaultState = {
    meds: [],
    isLoading: false,
    delMessage: '',
    createMessage: '',
    updateMessage:'',
    didCreate: false,
  };
  
  function medReducer(state = defaultState, action) {
    switch (action.type) {
      case GET_MEDS_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case GET_MEDS_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          meds: action.payload.data,
        });
      case GET_MEDS_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          meds: [],
        });
  
      case CREATE_MEDS_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
          didCreate: false,
        });
      case CREATE_MEDS_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: true,
          createMessage: action.payload.message,
        });
      case CREATE_MEDS_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: false,
          createMessage: action.payload.message,
        });
  
      case DELETE_MEDS_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case DELETE_MEDS_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          delMessage: 'DELETED SUCCESSFULLY',
        });
      case DELETE_MEDS_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          delMessage: 'UNABLE TO DELETE.',
        });

        case UPDATE_MEDS_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case UPDATE_MEDS_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          updateMessage: 'UPDATE SUCCESSFULLY',
        });
      case UPDATE_MEDS_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          updateMessage: 'UNABLE TO UPDATE',
        });
      default:
        return state;
    }
  }
  
  export default medReducer;
  