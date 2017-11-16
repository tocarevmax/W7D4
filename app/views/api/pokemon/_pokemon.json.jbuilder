json.extract! pokemon,:id, :name, :attack, :defense, :poke_type, :moves
json.image_url asset_path(pokemon.image_url)
