class HomeController < ApplicationController
  def index
    @messages = Message.find(
      :all,
      :limit => 3,
      :order => 'id desc'
    )

    
  end

end
