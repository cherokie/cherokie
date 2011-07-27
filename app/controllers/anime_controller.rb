class AnimeController < ApplicationController
  def index
    @twits = Twitanime.all
  end

end
