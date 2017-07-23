json.partial! 'api/photos/photo', photo: @photo

# eventually, this slice of state should look like:
# photos: {
#
#   currentPhoto: 4,
#
#   byPopularity: [4, ...],
#
#   byId: {
#     1: {
#       id: 1,
#       userId: 1,
#       username: 'xx',
#       profileImgUrl: 'xx.png',
#       photoUrl: 'xx.png',
#       description: "xx",
#       location: "xx",
#       uploadDate: 'xx',
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
