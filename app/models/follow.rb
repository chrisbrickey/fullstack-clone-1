class Follow < ApplicationRecord
  validates :follower_id, :following_id, presence: true

  validates :follower_id,
              uniqueness: { scope: :following_id,
              message: "you are already following this user"}

  belongs_to :follower_user,  #the user that is following another user
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: "User"

  belongs_to :followed_user, #the user who is being followed
    primary_key: :id,
    foreign_key: :following_id,
    class_name: "User"

end
