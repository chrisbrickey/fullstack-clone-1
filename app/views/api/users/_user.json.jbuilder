json.extract! user, :id, :username, :profile_img_url, :name, :tagline, :photos
#returns {id:  , username:  }

# add these after auth setup :name, :profile_img_url, :tagline

# eventually, this slice of state should look like:
# users: {
#
#   loggedInUser: 1,
#
#   byId: {
#     1: {
#       id: 1,
#       username: "xx",
#       name: "xx",
#       profileImgUrl: 'xx.png',
#       tagline: "xx",
#       followersCount: 10
#       followers: [2, ...],
#       followingCount: 11
#       following: [2, ...],
#       photosCount: 15,
#       photos: [2, ...]
#     },
#
#     2: {
#       ...
#     },
#   },
#
# },
