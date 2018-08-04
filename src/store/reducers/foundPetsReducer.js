import { FIND_PETS, GET_PET, ZIP_INVALID, RESET_ERROR } from "../actions/constants";

const initialState = {
  pets: [],
  pet: {}, 
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FIND_PETS:
      return {
        ...state,
        pets: action.payload,
        error: false
      };
    case GET_PET:
      return {
        ...state,
        pet: action.payload,
        error: false
      };
    case ZIP_INVALID:
     return {
       ...state,
       error: true
     };
    case RESET_ERROR:
     return {
       ...state,
       error: false
     }
    default:
      return state;
  }
}
