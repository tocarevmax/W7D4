import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {selectAllPokemon} from '../../reducers/selectors.js';
import {requestSinglePokemon} from '../../actions/pokemon_actions.js';





const mapStateToProps = state => {
  return {pokemon: state.entities.pokemon};
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
