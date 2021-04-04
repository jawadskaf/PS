import { getLabTest, deleteLabTest, addLabTest,updateLabTest } from '../../actions/actions';
import { toast } from 'react-toastify'

export const GET_LAB_STARTED = 'GET_LAB_STARTED'
export const GET_LAB_SUCCESS = 'GET_LAB_SUCCESS'
export const GET_LAB_ERROR = 'GET_LAB_ERROR'

export const CREATE_LAB_STARTED = 'CREATE_LAB_STARTED'
export const CREATE_LAB_SUCCESS = 'CREATE_LAB_SUCCESS'
export const CREATE_LAB_ERROR = 'CREATE_LAB_ERROR'

export const DELETE_LAB_SUCCESS = 'DELETE_LAB_SUCCESS'
export const DELETE_LAB_STARTED = 'DELETE_LAB_STARTED'
export const DELETE_LAB_ERROR = 'DELETE_LAB_ERROR'

export const UPDATE_LAB_SUCCESS = 'UPDATE_LAB_SUCCESS'
export const UPDATE_LAB_STARTED = 'UPDATE_LAB_STARTED'
export const UPDATE_LAB_ERROR = 'UPDATE_LAB_ERROR'

const labActions = {

  getLabTest: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_LAB_STARTED,
      });
      let response = await getLabTest()
      dispatch({
        type: GET_LAB_SUCCESS,
        payload: {
          data: response,
        },
      });
    } catch (error) {
      toast.error('ERROR GETTING LABS' + error)
      dispatch({
        type: GET_LAB_ERROR,
      });
    }
  },
  deleteLabTest: (data) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_LAB_STARTED,
      });
      await deleteLabTest(data);
      dispatch({
        type: DELETE_LAB_SUCCESS,
        payload: {
          message: 'LAB deleted successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_LAB_ERROR,
      })
    }
  },
  addLabTest: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_LAB_STARTED,
      });
      await addLabTest(data);
      dispatch({
        type: CREATE_LAB_SUCCESS,
        payload: {
          message: 'LAB added successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: CREATE_LAB_ERROR,
        payload: {
          message: 'failed to add LAB!',
        }
      })
    }
  },
  updateLabTest: (data) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_LAB_STARTED,
      });
      await updateLabTest(data);
      dispatch({
        type: UPDATE_LAB_SUCCESS,
        payload: {
          message: 'LAB updated successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_LAB_ERROR,
        payload: {
          message: 'failed to update LAB!',
        }
      })
    }
  }
};

export default labActions;



