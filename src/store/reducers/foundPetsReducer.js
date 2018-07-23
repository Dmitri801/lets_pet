import { FIND_PETS } from "../actions/constants";

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
    default:
      return state;
  }
}
