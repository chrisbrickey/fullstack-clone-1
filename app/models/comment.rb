class Comment < ApplicationRecord
  validates :body, :user_id, :photo_id, presence: true

  belongs_to :user
  belongs_to :photo
  has_many :likes, as: :likable, dependent: :destroy

  # after_initialize :assign_username

  def username
    self.user.username
  end

  # def assign_username
  #   self.username = User.find_by(id: self.user_id)
  # end

end
