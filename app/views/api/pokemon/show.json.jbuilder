json.set! :pokemon do
  # json.partial! 'api/pokemon/pokemon', pokemon: @pokemon

  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves
  json.image_url asset_path(@pokemon.image_url)

  json.set! :items, @pokemon.items.pluck(:id)

end

json.set! :items do
  json.array! @pokemon.items, :id, :pokemon_id, :name, :price, :happiness, :image_url

end
