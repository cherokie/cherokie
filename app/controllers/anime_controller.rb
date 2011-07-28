class AnimeController < ApplicationController
  def index
    @twits = Twitanime.all
    @selected = "anime"
  end

end
