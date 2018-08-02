import { FIND_PETS, GET_PET } from "./constants";
import { API_KEY } from "./secrets";
export const findPets = (animal, location) => dispatch => {
  fetch(
    `http://api.petfinder.com/pet.find?format=json&key=${API_KEY}&animal=${animal}&location=${location}`
  )
    .then(res => res.json())
    .then(pets =>
      dispatch({
        type: FIND_PETS,
        payload: pets.petfinder.pets.pet
      })
    )
    .catch(err => console.log(err));
};

export const getPet = id => dispatch => {
  fetch(`http://api.petfinder.com/pet.get?id=${id}&format=json&key=${API_KEY}`)
    .then(res => res.json())
    .then(pet =>
      dispatch({
        type: GET_PET,
        payload: pet.petfinder.pet
      })
    )
    .catch(err => console.log(err));
};
