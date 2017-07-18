class Follow < ApplicationRecord
  validates :follower_id, :following_id, presence: true

  validates :follower_id,
              uniqueness: { scope: following_id,
              message: "you are already following this user"}

  belongs_to :follower  #the user that is following another user
  belongs_to :following #the user who is being followed

end
