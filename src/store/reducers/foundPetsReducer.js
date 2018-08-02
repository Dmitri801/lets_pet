import { FIND_PETS, GET_PET } from "../actions/constants";

const initialState = {
  pets: [],
  pet: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FIND_PETS:
      return {
        ...state,
        pets: action.payload
      };
    case GET_PET:
      return {
        ...state,
        pet: action.payload
      };
    default:
      return state;
  }
}
