import { getUsers, deleteUser, registerUser,updateUser } from '../../actions/actions';
import { toast } from 'react-toastify'

export const GET_USERS_STARTED = 'GET_USERS_STARTED'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const CREATE_USERS_STARTED = 'CREATE_USER_STARTED'
export const CREATE_USERS_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USERS_ERROR = 'CREATE_USER_ERROR'

export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS'
export const DELETE_USERS_STARTED = 'DELETE_USERS_STARTED'
export const DELETE_USERS_ERROR = 'DELETE_USERS_ERROR'

export const UPDATE_USERS_SUCCESS = 'UPDATE_USERS_SUCCESS'
export const UPDATE_USERS_STARTED = 'UPDATE_USERS_STARTED'
export const UPDATE_USERS_ERROR = 'UPDATE_USERS_ERROR'

const usersActions = {

  getUsers: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_USERS_STARTED,
      });
      let response = await getUsers()
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: {
          data: response,
        },
      });
    } catch (error) {
      toast.error('ERROR GETTING USERS' + error)
      dispatch({
        type: GET_USERS_ERROR,
      });
    }
  },
  deleteUser: (data) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_USERS_STARTED,
      });
      await deleteUser(data);
      dispatch({
        type: DELETE_USERS_SUCCESS,
        payload: {
          message: 'deleted successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_USERS_ERROR,
      })
    }
  },
  registerUser: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_USERS_STARTED,
      });
      await registerUser(data);
      dispatch({
        type: CREATE_USERS_SUCCESS,
        payload: {
          message: 'added successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: CREATE_USERS_ERROR,
        payload: {
          message: 'failed to create account!',
        }
      })
    }
  },
  updateUser: (data) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_USERS_STARTED,
      });
      await updateUser(data);
      dispatch({
        type: UPDATE_USERS_SUCCESS,
        payload: {
          message: 'updated successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_USERS_ERROR,
        payload: {
          message: 'failed to update account!',
        }
      })
    }
  }
};

export default usersActions;



