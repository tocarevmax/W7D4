import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  let newState={};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_SINGLE_POKEMON:
      const newPoke = action.pokemon.pokemon;
      let newpokestate={};
      newpokestate[newPoke.id] = newPoke;
      newState = merge({}, state, newpokestate);
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
