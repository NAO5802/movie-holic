class MoviesController < ApplicationController
  before_action :redirect_to_signin
  # , except: :index

  def index

  end

  def show
    
  end


  private

  def redirect_to_signin
    redirect_to new_user_session_path unless user_signed_in?
  end


end
