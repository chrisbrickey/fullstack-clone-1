class User < ApplicationRecord

  validates :username,
              presence: true,
              length: { minimum: 6 },
              uniqueness: { case_sensitive: false }

  validates :password,
              length: { minimum: 6 },
              allow_nil: :true

  validates :name,
              presence: true,
              uniqueness: true

  validates :session_token,
              presence: true,
              uniqueness: true

  validates :password_digest, presence: true

  has_many :photos
  has_many :likes
  has_many :comments
  has_many :followers  #other users that are following this user
  has_many :followings #other users that this user is following

end
