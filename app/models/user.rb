class User < ApplicationRecord

  validates :username,
              presence: true,
              length: { minimum: 6 },
              uniqueness: { case_sensitive: false }

  validates :password,
              length: { minimum: 6 },
              allow_nil: true

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

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?

    if user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
