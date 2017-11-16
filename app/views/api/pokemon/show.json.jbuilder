json.set! :pokemon do
  json.partial! 'api/pokemon/pokemon', pokemon: @pokemon
end

json.set! :items do
  json.array! @pokemon.items, :pokemon_id, :name, :price, :happiness, :image_url

end
