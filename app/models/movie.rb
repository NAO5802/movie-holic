class Movie < ApplicationRecord
  mount_uploader :movie_image, ImageUploader
  mount_uploader :movie_url, VideoUploader

  validates :title, presence: true
  validates :movie_url, presence: true
  validates :movie_image, presence: true
  validates :summary, presence: true
end
