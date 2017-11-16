class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
  end

  def show
    @pokemon = Pokemon.includes(:items).find_by(id: params[:id])
  end
end
