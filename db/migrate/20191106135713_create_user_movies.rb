class CreateUserMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :user_movies do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :movie_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
