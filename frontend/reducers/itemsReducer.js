import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
   switch (action.type) {
     case RECEIVE_SINGLE_POKEMON:
       const items = action.pokemon.items;
       let newState={};
       newState = merge({}, state, items);
       return newState;
     default:
      return state;
   }
};

export default itemsReducer;
