import { getOrders, deleteMedOrder, addMedOrder,updateMedOrder } from '../../actions/actions';
import { toast } from 'react-toastify'

export const GET_MEDS_STARTED = 'GET_MEDS_STARTED'
export const GET_MEDS_SUCCESS = 'GET_MEDS_SUCCESS'
export const GET_MEDS_ERROR = 'GET_MEDS_ERROR'

export const CREATE_MEDS_STARTED = 'CREATE_MEDS_STARTED'
export const CREATE_MEDS_SUCCESS = 'CREATE_MEDS_SUCCESS'
export const CREATE_MEDS_ERROR = 'CREATE_MEDS_ERROR'

export const DELETE_MEDS_SUCCESS = 'DELETE_MEDS_SUCCESS'
export const DELETE_MEDS_STARTED = 'DELETE_MEDS_STARTED'
export const DELETE_MEDS_ERROR = 'DELETE_MEDS_ERROR'

export const UPDATE_MEDS_SUCCESS = 'UPDATE_MEDS_SUCCESS'
export const UPDATE_MEDS_STARTED = 'UPDATE_MEDS_STARTED'
export const UPDATE_MEDS_ERROR = 'UPDATE_MEDS_ERROR'

const medsActions = {

  getOrders: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_MEDS_STARTED,
      });
      let response = await getOrders()
      dispatch({
        type: GET_MEDS_SUCCESS,
        payload: {
          data: response,
        },
      });
    } catch (error) {
      toast.error('ERROR GETTING MEDS' + error)
      dispatch({
        type: GET_MEDS_ERROR,
      });
    }
  },
  deleteMedOrder: (data) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_MEDS_STARTED,
      });
      await deleteMedOrder(data);
      dispatch({
        type: DELETE_MEDS_SUCCESS,
        payload: {
          message: 'MEDS deleted successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_MEDS_ERROR,
      })
    }
  },
  addMedOrder: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_MEDS_STARTED,
      });
      await addMedOrder(data);
      dispatch({
        type: CREATE_MEDS_SUCCESS,
        payload: {
          message: 'MEDS added successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: CREATE_MEDS_ERROR,
        payload: {
          message: 'failed to add MEDS!',
        }
      })
    }
  },
  updateMedOrder: (data) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_MEDS_STARTED,
      });
      await updateMedOrder(data);
      dispatch({
        type: UPDATE_MEDS_SUCCESS,
        payload: {
          message: 'MEDS updated successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_MEDS_ERROR,
        payload: {
          message: 'failed to update MEDS!',
        }
      })
    }
  }
};

export default medsActions;



