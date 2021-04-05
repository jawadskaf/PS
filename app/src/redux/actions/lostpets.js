import { getLostPets,reportPet } from '../../actions/actions';
import { toast } from 'react-toastify'

export const GET_LOSTPET_STARTED = 'GET_LOSTPET_STARTED'
export const GET_LOSTPET_SUCCESS = 'GET_LOSTPET_SUCCESS'
export const GET_LOSTPET_ERROR = 'GET_LOSTPET_ERROR'

export const CREATE_LOSTPET_STARTED = 'CREATE_LOSTPET_STARTED'
export const CREATE_LOSTPET_SUCCESS = 'CREATE_LOSTPET_SUCCESS'
export const CREATE_LOSTPET_ERROR = 'CREATE_LOSTPET_ERROR'


const lostpetsActions = {

  getLostPets: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_LOSTPET_STARTED,
      });
      let response = await getLostPets()
      dispatch({
        type: GET_LOSTPET_SUCCESS,
        payload: {
          data: response,
        },
      });
    } catch (error) {
      toast.error('ERROR GETTING LOST PETS' + error)
      dispatch({
        type: GET_LOSTPET_ERROR,
      });
    }
  },
  reportPet: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_LOSTPET_STARTED,
      });
      await reportPet(data);
      dispatch({
        type: CREATE_LOSTPET_SUCCESS,
        payload: {
          message: 'lost pet report added successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: CREATE_LOSTPET_ERROR,
        payload: {
          message: 'failed to report lost pet!',
        }
      })
    }
  },
};

export default lostpetsActions;



