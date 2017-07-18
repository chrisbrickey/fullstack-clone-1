class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :likable_id, null: false
      t.string :likable_type, null: false
      t.timestamps
    end

    #am I duplicating or are both required (11 for polymorphic capability, 12 for uniqueness scoping of all three columns)
    add_index :likes, [:likable_type, :likable_id]
    add_index :likes, [:user_id, :likable_id, :likable_type], unique: true

  end
end
