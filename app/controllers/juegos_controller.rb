class JuegosController < ApplicationController
  def index
   @twits = Twit.all
   @selected = "juegos"
  end

end
