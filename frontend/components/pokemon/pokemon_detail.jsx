import React from 'react';
import ItemDetailContainer from './items/item_detail_container';
import { Route, Link } from 'react-router-dom';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);

    this.pokeID = this.props.match.params.id;
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.pokeID);
  }

  componentWillReceiveProps(newProps) {
    if (this.pokeID !== newProps.match.params.id) { //
      this.pokeID = newProps.match.params.id;
      this.props.requestSinglePokemon(this.pokeID);
    }
  }

  render(){
    let poke = this.props.pokemon[this.pokeID];
    if (!poke || !poke.moves) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>);
        }

    const links = poke.items.map((item,idx) => {
      let str = `/pokemon/${this.pokeID}/item/${item}`;
      return (<li><Link to={str}>{idx}</Link></li>);
    });

    return (
      <div className = "pokemon-details">
        <img src={poke.image_url}></img>
        <h1>{poke.name}</h1>
        <h3>Type: {poke.poke_type}</h3>
        <h3>Attack: {poke.attack}</h3>
        <h3>Defense: {poke.defense}</h3>
        <h3>Moves: {poke.moves.join(", ")}</h3>

        <ul className="item-buttons">
          {links}
        </ul>

        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />

      </div>
    );
  }
}

export default PokemonDetail;
