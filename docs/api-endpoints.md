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


### Likes

- `POST /api/photos/:photo_id/like` - add a like to a photo
- `DELETE /api/photos/:photo_id/like` - remove like from a photo


### Comments

- `POST /api/photos/:photo_id/comments` - add a comment to a photo
- `DELETE /api/comment/:comment_id` - remove comment from a photo


### Follows

- `POST /api/users/:user_id/follow` - add a follow to a user
- `DELETE /api/users/:user_id/follow` - remove follow from a user


### Bonus
- `DELETE /api/users/:user_id` - remove user
