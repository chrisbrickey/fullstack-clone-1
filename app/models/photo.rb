class Photo < ApplicationRecord
  validates :photo_url, :author_id, presence: true

  belongs_to :author
  has_many :likes, as: :likable
  has_many :comments

  
end
