class Photo < ApplicationRecord
  validates :photo_url, :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id, 
    class_name: "User"


  has_many :likes, as: :likable
  has_many :comments


end
