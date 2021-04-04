import { getDogs,adoptDog } from '../../actions/actions';
import { toast } from 'react-toastify'

export const GET_DOG_STARTED = 'GET_DOG_STARTED'
export const GET_DOG_SUCCESS = 'GET_DOG_SUCCESS'
export const GET_DOG_ERROR = 'GET_DOG_ERROR'

export const CREATE_DOG_STARTED = 'CREATE_DOG_STARTED'
export const CREATE_DOG_SUCCESS = 'CREATE_DOG_SUCCESS'
export const CREATE_DOG_ERROR = 'CREATE_DOG_ERROR'


const dogActions = {

  getDogs: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_DOG_STARTED,
      });
      let response = await getDogs()
      dispatch({
        type: GET_DOG_SUCCESS,
        payload: {
          data: response,
        },
      });
    } catch (error) {
      toast.error('ERROR GETTING DOGS' + error)
      dispatch({
        type: GET_DOG_ERROR,
      });
    }
  },
  adoptDog: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_DOG_STARTED,
      });
      await adoptDog(data);
      dispatch({
        type: CREATE_DOG_SUCCESS,
        payload: {
          message: 'adoption added successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: CREATE_DOG_ERROR,
        payload: {
          message: 'failed to adopt dog!',
        }
      })
    }
  },
};

export default dogActions;



