class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.text :photo_url, null: false
      t.string :caption
      t.string :location
      t.integer :author_id, null: false
      t.timestamps
    end

    add_index :photos, :author_id
  end
end
