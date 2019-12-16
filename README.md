# DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, default: ""|
|encrypted_password|string|null: false, default: ""|
|reset_password_token|string|unique: true, index: true|
|reset_password_sent_at|datetime||
|remember_created_at|datetime||
### Association
- has_many :comments

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|movie_id|references|foreign_key: true|
|text|text|null: false|
### Association
- belongs_to :user
- belongs_to :movie

## moviesテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|movie_url|text|null: false|
|movie_image|text|null: false|
|summary|text|null: false|
### Association
- has_many :comments