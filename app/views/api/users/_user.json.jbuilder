json.id                 user.id
json.username           user.username
json.profileImgUrl      user.profile_img_url
json.name               user.name
json.tagline            user.tagline

json.photos             user.photos
json.photos_count       user.photos_count

json.followersCount     user.followers_count
json.followingCount     user.following_count

# change this to return array of user_ids to minimize info sent to frontend
json.usersWhoFollowMe   user.users_who_follow_me
json.usersWhoIFollow    user.users_that_i_follow
json.booleanT           true
json.booleanF           false
json.followedByCurrentUser  logged_in? && Follow.exists?(follower_id: current_user.id, following_id: user.id)
