json.extract! user, :id, :username, :profile_img_url, :name, :tagline, :photos

#insert something similar to below for users to facilitate following
# json.followersCount         user.count_of_followers
# json.usersWhoFollowMe       user.users_who_follow_me
# json.usersWhoIFollow        user.users_that_i_follow
# json.followedByCurrentUser  logged_in? && Follow.exists?(follower_id: current_user.id, following_id: user.id)
