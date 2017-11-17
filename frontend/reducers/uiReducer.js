import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const uiReducer = (state = {}, action) => {
  let newState={};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      newState = {pokeDisplay: action.pokemon.pokemon.id};
      newState = merge({}, state, newState);
      return newState;
    default:
      return state;

  }
};

export default uiReducer;
