import { feedback } from '../../actions/actions';
import { toast } from 'react-toastify'

export const CREATE_FEEDBACK_STARTED = 'CREATE_FEEDBACK_STARTED'
export const CREATE_FEEDBACK_SUCCESS = 'CREATE_FEEDBACK_SUCCESS'
export const CREATE_FEEDBACK_ERROR = 'CREATE_FEEDBACK_ERROR'


const feedbackk = {

  feedback: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_FEEDBACK_STARTED,
      });
      await feedback(data);
      dispatch({
        type: CREATE_FEEDBACK_SUCCESS,
        payload: {
          message: 'feedback added successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: CREATE_FEEDBACK_ERROR,
        payload: {
          message: 'failed to add feedback!',
        }
      })
    }
  },
};

export default feedbackk;



