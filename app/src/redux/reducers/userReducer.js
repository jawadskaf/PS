import {
    GET_USERS_STARTED,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
  
    CREATE_USERS_STARTED,
    CREATE_USERS_SUCCESS,
    CREATE_USERS_ERROR,
  
    DELETE_USERS_STARTED,
    DELETE_USERS_SUCCESS,
    DELETE_USERS_ERROR,

    UPDATE_USERS_STARTED,
    UPDATE_USERS_SUCCESS,
    UPDATE_USERS_ERROR,
  
  } from "../actions/users";
  
  const defaultState = {
    users: [],
    isLoading: false,
    delMessage: '',
    createMessage: '',
    updateMessage:'',
    didCreate: false,
  };
  
  function userReducer(state = defaultState, action) {
    switch (action.type) {
      case GET_USERS_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case GET_USERS_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          users: action.payload.data,
        });
      case GET_USERS_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          users: [],
        });
  
      case CREATE_USERS_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
          didCreate: false,
        });
      case CREATE_USERS_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: true,
          createMessage: action.payload.message,
        });
      case CREATE_USERS_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: false,
          createMessage: action.payload.message,
        });
  
      case DELETE_USERS_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case DELETE_USERS_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          delMessage: 'DELETED SUCCESSFULLY',
        });
      case DELETE_USERS_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          delMessage: 'UNABLE TO DELETE.',
        });

        case UPDATE_USERS_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case UPDATE_USERS_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          updateMessage: 'UPDATE SUCCESSFULLY',
        });
      case UPDATE_USERS_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          updateMessage: 'UNABLE TO UPDATE',
        });
      default:
        return state;
    }
  }
  
  export default userReducer;
  