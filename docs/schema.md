# Schema Information

## users
column_name     | data_type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
name            | string    | not null
profile_img_url | text      |
tagline         | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
created_at      | datetime  |
updated_at      | datetime  |



## photos
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_url   | text      | not null
caption     | string    |
location    | string    |
author_id   | integer   | not null, foreign key (users), indexed
created_at  | datetime  |
updated_at  | datetime  |


## likes
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (users), indexed, unique (photo_id)
photo_id    | integer   | not null, foreign key (photos), indexed
created_at  | datetime  |
updated_at  | datetime  |


## comments
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (users), indexed
photo_id    | integer   | not null, foreign key (photos), indexed
created_at  | datetime  |
updated_at  | datetime  |


## follows
column_name     | data_type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follower_id     | integer   | not null, foreign key (users), indexed, unique (following_id)
following_id    | integer   | not null, foreign key (users), indexed
