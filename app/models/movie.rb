class Movie < ApplicationRecord
  mount_uploader :movie_image, ImageUploader
  mount_uploader :movie_url, VideoUploader
end
