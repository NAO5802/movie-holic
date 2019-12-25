# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Faker::Config.locale = :en

15.times do |index|
  Movie.create(
    title: Faker::Book.title,
    movie_url: File.open("#{Rails.root}/db/fixtures/movie#{index+1}.mp4"),
    movie_image: File.open("#{Rails.root}/db/fixtures/movie#{index+1}.jpg"),
    summary: Faker::Lorem.paragraph(sentence_count: 15)
  )
end
