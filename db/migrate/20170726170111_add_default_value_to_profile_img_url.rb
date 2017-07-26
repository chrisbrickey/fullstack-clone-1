class AddDefaultValueToProfileImgUrl < ActiveRecord::Migration[5.1]
  def up
    change_column :users, :profile_img_url, :text, default: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500953840/instagram-color-fade_pvpssi.png"
  end

  def down
    change_column :users, :profile_img_url, :text, default: nil
  end
end
