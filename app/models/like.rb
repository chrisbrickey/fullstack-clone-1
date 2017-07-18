class Like < ApplicationRecord
  validates :user_id, :likable_id, :likable_type, presence: true
  validates_uniqueness_of :user_id, scope: %i[likable_id likable_type]

  belongs_to :likable, polymorphic: true
  belongs_to :user

end
