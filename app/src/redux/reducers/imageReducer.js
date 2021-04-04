import {
    

    GET_IMAGE_STARTED,
    GET_IMAGE_SUCCESS,
    GET_IMAGE_ERROR,

    CREATE_IMAGE_STARTED,
    CREATE_IMAGE_SUCCESS,
    CREATE_IMAGE_ERROR,


  
  } from "../actions/image";
  
  const defaultState = {
    image: [],
    isLoading: false,
    createMessage: '',
    didCreate: false,
  };
  
  function imageReducer(state = defaultState, action) {
    switch (action.type) {

        case GET_IMAGE_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case GET_IMAGE_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          image: action.payload.data,
        });
      case GET_IMAGE_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          image: [],
        });
      
  
      case CREATE_IMAGE_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
          didCreate: false,
        });
      case CREATE_IMAGE_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: true,
          createMessage: action.payload.message,
        });
      case CREATE_IMAGE_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: false,
          createMessage: action.payload.message,
        });
  
      default:
        return state;
    }
  }
  
  export default imageReducer;
  