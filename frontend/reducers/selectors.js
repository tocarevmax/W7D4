import {values} from 'lodash';


export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};


export const selectItem = (state, ownProps) => {
  const itemId = ownProps.match.params.itemId;
  const obj = state.entities.items;
  const keys = Object.keys(obj);
  const mapped = keys.map((key) => {
    return obj[key];
  });

  for (var i = 0; i < mapped.length; i++) {
    if (mapped[i].id === Number(itemId)) {
      var targetItem = mapped[i];

    }
  }
  return targetItem;
};
