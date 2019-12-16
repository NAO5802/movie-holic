class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.text :movie_url
      t.text :movie_image
      t.text :summary
      t.timestamps
    end
  end
end
