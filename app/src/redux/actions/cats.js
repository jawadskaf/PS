import { getCats,adoptCat } from '../../actions/actions';
import { toast } from 'react-toastify'

export const GET_CAT_STARTED = 'GET_CAT_STARTED'
export const GET_CAT_SUCCESS = 'GET_CAT_SUCCESS'
export const GET_CAT_ERROR = 'GET_CAT_ERROR'

export const CREATE_CAT_STARTED = 'CREATE_CAT_STARTED'
export const CREATE_CAT_SUCCESS = 'CREATE_CAT_SUCCESS'
export const CREATE_CAT_ERROR = 'CREATE_CAT_ERROR'


const catActions = {

  getCats: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_CAT_STARTED,
      });
      let response = await getCats()
      dispatch({
        type: GET_CAT_SUCCESS,
        payload: {
          data: response,
        },
      });
    } catch (error) {
      toast.error('ERROR GETTING CATS' + error)
      dispatch({
        type: GET_CAT_ERROR,
      });
    }
  },
  adoptCat: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_CAT_STARTED,
      });
      await adoptCat(data);
      dispatch({
        type: CREATE_CAT_SUCCESS,
        payload: {
          message: 'adoption added successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: CREATE_CAT_ERROR,
        payload: {
          message: 'failed to adopt cat!',
        }
      })
    }
  },
};

export default catActions;



