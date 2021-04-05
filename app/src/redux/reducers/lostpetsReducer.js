import {

    GET_LOSTPET_STARTED,
    GET_LOSTPET_SUCCESS,
    GET_LOSTPET_ERROR,

    CREATE_LOSTPET_STARTED,
    CREATE_LOSTPET_SUCCESS,
    CREATE_LOSTPET_ERROR,
  
  } from "../actions/lostpets";
  
  const defaultState = {
    lostpets: [],
    isLoading: false,
    createMessage: '',
    didCreate: false,
  };
  
  function lostpetsReducer(state = defaultState, action) {
    switch (action.type) {
      case GET_LOSTPET_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case GET_LOSTPET_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          lostpets: action.payload.data,
        });
      case GET_LOSTPET_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          lostpets: [],
        });
  
      case CREATE_LOSTPET_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
          didCreate: false,
        });
      case CREATE_LOSTPET_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: true,
          createMessage: action.payload.message,
        });
      case CREATE_LOSTPET_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: false,
          createMessage: action.payload.message,
        });
  
      default:
        return state;
    }
  }
  
  export default lostpetsReducer;
  