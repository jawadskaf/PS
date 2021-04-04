import { addImage,getImage } from '../../actions/actions';
import { toast } from 'react-toastify'




export const CREATE_IMAGE_STARTED = 'CREATE_IMAGE_STARTED'
export const CREATE_IMAGE_SUCCESS = 'CREATE_IMAGE_SUCCESS'
export const CREATE_IMAGE_ERROR = 'CREATE_IMAGE_ERROR'

export const GET_IMAGE_STARTED = 'GET_IMAGE_STARTED'
export const GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS'
export const GET_IMAGE_ERROR = 'GET_IMAGE_ERROR'



const imageActions = {

    getImage: () => async (dispatch) => {
        try {
          dispatch({
            type: GET_IMAGE_STARTED,
          });
          let response = await getImage()
          dispatch({
            type: GET_IMAGE_SUCCESS,
            payload: {
              data: response,
            },
          });
        } catch (error) {
          toast.error('ERROR GETTING HEALTHCARE' + error)
          dispatch({
            type: GET_IMAGE_ERROR,
          });
        }
      },
 
  addImage: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_IMAGE_STARTED,
      });
      await addImage(data);
      dispatch({
        type: CREATE_IMAGE_SUCCESS,
        payload: {
          message: 'IMAGE added successfully',
        }
      });
    } catch (err) {
      dispatch({
        type: CREATE_IMAGE_ERROR,
        payload: {
          message: 'failed to add HEALTHCARE!',
        }
      })
    }
  }
};

export default imageActions;



