json.id             photo.id
json.photoUrl       photo.photo_url
json.caption        photo.caption
json.location       photo.location
json.uploadDate     photo.created_at

json.userID         photo.author.id
json.username       photo.author.username
json.profileImgUrl  photo.author.profile_img_url



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
