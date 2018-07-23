import { combineReducers } from "redux";
import foundPetsReducer from "./foundPetsReducer";

export default combineReducers({
  foundPets: foundPetsReducer
});
