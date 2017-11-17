import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();

  }

  render(){
    // debugger;
    const pokeArray = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke} /> );

    if (!this.props.pokemon[0]) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>);
        }

    return (
      <div className="pokemon_index">
        <ul className="aside">
          {pokeArray}
        </ul>
        <Route path="/pokemon/:id" component={PokemonDetailContainer} />
      </div>
    );
  }

}

export default PokemonIndex;
