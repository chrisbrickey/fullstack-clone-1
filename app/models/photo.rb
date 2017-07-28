class Photo < ApplicationRecord
  validates :photo_url, :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

  has_many :comments, dependent: :destroy

  has_many :likes, as: :likable, dependent: :destroy

  has_many :users_who_like,
    through: :likes,
    source: :user

  def count_of_likes
    self.likes.length
  end

end
