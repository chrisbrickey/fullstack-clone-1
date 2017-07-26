class Like < ApplicationRecord
  validates :user_id, :likable_id, :likable_type, presence: true
  validates_uniqueness_of :user_id, scope: %i[likable_id likable_type]

  #when I enter value for likable_type, it must be the name of the class e.g. "Photo" or "Comment"...must be exact
  belongs_to :likable, polymorphic: true
  belongs_to :user

end
