require "movie.rb"

class MoviesController < ApplicationController
  before_action :redirect_to_signin

  def index
    @movies = Movie.order('RAND()').limit(10)
    @images = get_images(@movies)
  end

  def show
    @movie = Movie.find(params[:id])
  end


  private

  def redirect_to_signin
    redirect_to new_user_session_path unless user_signed_in?
  end

  def get_images(movies)
    images = []
    movies.each do |m|
      images << m.movie_image
    end
    return images
  end


end
