import { getHealthcareProduct, deleteHealthcareProduct, addHealthcareProduct,updateHealthcareProduct } from '../../actions/actions';
import { toast } from 'react-toastify'

export const GET_HEALTHCARE_STARTED = 'GET_HEALTHCARE_STARTED'
export const GET_HEALTHCARE_SUCCESS = 'GET_HEALTHCARE_SUCCESS'
export const GET_HEALTHCARE_ERROR = 'GET_HEALTHCARE_ERROR'

export const CREATE_HEALTHCARE_STARTED = 'CREATE_HEALTHCARE_STARTED'
export const CREATE_HEALTHCARE_SUCCESS = 'CREATE_HEALTHCARE_SUCCESS'
export const CREATE_HEALTHCARE_ERROR = 'CREATE_HEALTHCARE_ERROR'

export const DELETE_HEALTHCARE_SUCCESS = 'DELETE_HEALTHCARE_SUCCESS'
export const DELETE_HEALTHCARE_STARTED = 'DELETE_HEALTHCARE_STARTED'
export const DELETE_HEALTHCARE_ERROR = 'DELETE_HEALTHCARE_ERROR'

export const UPDATE_HEALTHCARE_SUCCESS = 'UPDATE_HEALTHCARE_SUCCESS'
export const UPDATE_HEALTHCARE_STARTED = 'UPDATE_HEALTHCARE_STARTED'
export const UPDATE_HEALTHCARE_ERROR = 'UPDATE_HEALTHCARE_ERROR'

const healthcareActions = {

  getHealthcareProduct: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_HEALTHCARE_STARTED,
      });
      let response = await getHealthcareProduct()
      dispatch({
        type: GET_HEALTHCARE_SUCCESS,
        payload: {
          data: response,
        },
      });
    } catch (error) {
      toast.error('ERROR GETTING HEALTHCARE' + error)
      dispatch({
        type: GET_HEALTHCARE_ERROR,
      });
    }
  },
  deleteHealthcareProduct: (data) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_HEALTHCARE_STARTED,
      });
      await deleteHealthcareProduct(data);
      dispatch({
        type: DELETE_HEALTHCARE_SUCCESS,
        payload: {
          message: 'HEALTHCARE deleted successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_HEALTHCARE_ERROR,
      })
    }
  },
  addHealthcareProduct: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_HEALTHCARE_STARTED,
      });
      await addHealthcareProduct(data);
      dispatch({
        type: CREATE_HEALTHCARE_SUCCESS,
        payload: {
          message: 'HEALTHCARE added successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: CREATE_HEALTHCARE_ERROR,
        payload: {
          message: 'failed to add HEALTHCARE!',
        }
      })
    }
  },
  updateHealthcareProduct: (data) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_HEALTHCARE_STARTED,
      });
      await updateHealthcareProduct(data);
      dispatch({
        type: UPDATE_HEALTHCARE_SUCCESS,
        payload: {
          message: 'HEALTHCARE updated successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_HEALTHCARE_ERROR,
        payload: {
          message: 'failed to update HEALTHCARE!',
        }
      })
    }
  }
};

export default healthcareActions;



