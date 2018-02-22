# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app


## JSON API

### Session

- `POST /api/session` - login
- `DELETE /api/session` - logout


### Users

- `GET /api/users` - load all users
- `GET /api/users/:user_id` - retrieve specific user (includes followers and followees)
- `POST /api/users` - create user
- `PATCH /api/users/:user_id` - edit user


### Photos

- `GET/api/users/:user_id/photos` - retrieve all photos that belong to a specific user
- `GET /api/photos` - load all photos
- `GET /api/photos/:photo_id` - retrieve specific photo
- `POST /api/photos` - create photo
- `PATCH /api/photos/:photos_id` - edit photo
- `DELETE /api/photos/:photo_id` - remove photo


### Likes (polymorphic)

- `POST /api/photos/:photo_id/likes` - add a like to a photo
- `POST /api/comments/:comment_id/likes` - add a like to a comment

- `DELETE /api/photos/:photo_id/likes` - remove a like from a photo
- `DELETE /api/comments/:comment_id/likes` - remove a like from a comment


### Comments

- `POST /api/photos/:photo_id/comments` - add a comment to a photo
- `DELETE /api/comment/:comment_id` - remove a comment from a photo


### Follows

- `POST /api/users/:user_id/follows` - add a follow record to a user (:user_id corresponds to follower_id)
- `DELETE /api/follows/:follow_id` - remove a follow record


### Bonus
- `DELETE /api/users/:user_id` - remove user
