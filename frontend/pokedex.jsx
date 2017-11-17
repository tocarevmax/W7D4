import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import { HashRouter, Route } from 'react-router-dom';

// // comment out when done
 import {fetchAllPokemon, fetchSinglePokemon} from './util/api_util.js';
 window.fetchSinglePokemon = fetchSinglePokemon;
 import {receiveAllPokemon, requestAllPokemon, requestSinglePokemon} from './actions/pokemon_actions.js';
window.requestSinglePokemon = requestSinglePokemon;
// import {selectAllPokemon} from './reducers/selectors';
// window.requestAllPokemon = requestAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.receiveAllPokemon =  receiveAllPokemon;
// window.selectAllPokemon = selectAllPokemon;
// // comment out when done


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();


  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, rootEl);
});
