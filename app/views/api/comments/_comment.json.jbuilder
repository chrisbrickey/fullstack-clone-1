json.id         comment.id
json.body       comment.body
json.userId     comment.user_id
json.photoId    comment.photo_id
json.exactTime  comment.created_at

json.username   comment.user.username

#initially was pulling info like below...
# json.extract! @comment, :id, :body, :user_id, :photo_id
