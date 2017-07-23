# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#no seeds leftover from previous builds
User.destroy_all

#will rollback all seeds if any issues; create! fails loudly so can get more information on errors
ActiveRecord::Base.transaction do
  demo1 = User.create!(name: 'Demo User1', username: 'demouser1', password: "123456", profile_img_url: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg", tagline: "always be dancing")
  demo2 = User.create!(name: 'Demo User2', username: "demouser2", password: "123456", profile_img_url: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg", tagline: "always be dancing")
  demo3 = User.create!(name: 'Demo User3', username: "demouser3", password: "123456", profile_img_url: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg", tagline: "always be dancing")
  demo4 = User.create!(name: 'Demo User4', username: "demouser4", password: "123456", profile_img_url: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg", tagline: "always be dancing")
  demo5 = User.create!(name: 'Demo User5', username: "demouser5", password: "123456", profile_img_url: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg", tagline: "always be dancing")
  demo6 = User.create!(name: 'Demo User6', username: "demouser6", password: "123456", profile_img_url: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg", tagline: "always be dancing")
  demo7 = User.create!(name: 'Demo User7', username: "demouser7", password: "123456", profile_img_url: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg", tagline: "always be dancing")
  demo8 = User.create!(name: 'Demo User8', username: "demouser8", password: "123456", profile_img_url: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg", tagline: "always be dancing")
  demo9 = User.create!(name: 'Demo User9', username: "demouser9", password: "123456", profile_img_url: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg", tagline: "always be dancing")
  demo10 = User.create!(name: 'Demo User10', username: "demouser10", password: "123456", profile_img_url: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg", tagline: "always be dancing")

  photo1 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771271/fierce_xyjq3a.jpg',
    caption: "ballerina en pointe",
    location: "earth",
    author_id: 1
    )

  photo2 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771420/infinity_neg30m.jpg',
    caption: "infinitely beautiful",
    location: "earth",
    author_id: 1
    )

  photo3 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771107/mural_c8cg36.jpg',
    caption: "urban inspiration",
    location: "earth",
    author_id: 1
    )

end
