import React from 'react';


class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();

  }

  render(){
    // debugger;
    return (
      <ul>
        {this.props.pokemon.map((poke,idx) => {
          return (<li key={idx}><img height="30px" src={poke.image_url}></img> {poke.name}</li>);
        })}
      </ul>
    );
  }



}

export default PokemonIndex;
