class AddIndividualIndicesOnLikesTable < ActiveRecord::Migration[5.1]
  def change
    add_index :likes, :likable_id
    add_index :likes, :likable_type
    add_index :likes, :user_id
  end
end
