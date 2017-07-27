json.id             photo.id
json.photoUrl       photo.photo_url
json.caption        photo.caption
json.location       photo.location
json.uploadDate     time_ago_in_words(photo.created_at)
json.exactTime      photo.created_at

json.userId         photo.author.id
json.username       photo.author.username
json.name           photo.author.name
json.profileImgUrl  photo.author.profile_img_url
json.likesCount     photo.count_of_likes
json.usersWhoLike   photo.users_who_like
json.likedByCurrentUser          logged_in? && Like.exists?(user_id: current_user.id, likable_id: photo.id, likable_type: "Photo")



# json.extract! photo, :photo_url, :caption, :location, :author_id, :created_at
#returns {photo_url:      , caption:     , location:     , author_id:     , created_at:      }


# eventually, this slice of state should look like...
# photos: {

#   currentPhoto: 4,
#
#   byPopularity: [4, ...],
#
#   byId: {
#     1: {
#       id: 1,
#       photoUrl: 'xx.png',
#       caption: "xx",
#       location: "xx",
#       uploadDate: 'xx',
#
#       userId: 1,
#       username: 'xx',
#       profileImgUrl: 'xx.png',
#       comments: [2, ...],
#       likesCount: 10,
#       likers: ["xx", ...]
#     },
#
#     2: {
#       ...
#     }
#   },
#
# },
