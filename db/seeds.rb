# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#no seeds leftover from previous builds
User.destroy_all
Photo.destroy_all

#will rollback all seeds if any issues; create! fails loudly so can get more information on errors
ActiveRecord::Base.transaction do
  demo1 = User.create!(name: 'Chris', username: 'chrisbrickey1', password: '123456', profile_img_url: "https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg", tagline: 'always be dancing')
  demo2 = User.create!(name: 'Chris', username: 'chrisbrickey2', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg', tagline: 'always be dancing')
  demo3 = User.create!(name: 'Chris', username: 'chrisbrickey3', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg', tagline: 'always be dancing')
  demo4 = User.create!(name: 'Chris', username: 'chrisbrickey4', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg', tagline: 'always be dancing')
  demo5 = User.create!(name: 'Chris', username: 'chrisbrickey5', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg', tagline: 'always be dancing')
  demo6 = User.create!(name: 'Chris', username: 'chrisbrickey6', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg', tagline: 'always be dancing')
  demo7 = User.create!(name: 'Chris', username: 'chrisbrickey7', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg', tagline: 'always be dancing')
  demo8 = User.create!(name: 'Chris', username: 'chrisbrickey8', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg', tagline: 'always be dancing')
  demo9 = User.create!(name: 'Chris', username: 'chrisbrickey9', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg', tagline: 'always be dancing')
  demo10 = User.create!(name: 'Chris', username: 'chrisbrickey10', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500775805/headshot_crop2_owq402.jpg', tagline: 'always be dancing')

  otheruser1 = User.create!(name: 'Alice Chen', username: 'alice_chen', password: '123456')
  otheruser2 = User.create!(name: 'Arvind Ravi', username: 'arvind', password: '123456')
  otheruser3 = User.create!(name: 'Atom Crimi', username: 'atom_crimi', password: '123456')
  otheruser4 = User.create!(name: 'Cherry Wing-Yu Lam', username: 'cherry', password: '123456')
  otheruser5 = User.create!(name: 'Clare Hsu', username: 'clare_hsu', password: '123456')
  otheruser6 = User.create!(name: 'David Corson-Knowles', username: 'david_corson-knowles', password: '123456')
  otheruser7 = User.create!(name: 'Graham Paye', username: 'graham', password: '123456')
  otheruser8 = User.create!(name: 'Hiro Obara', username: 'hiro_obara', password: '123456')
  otheruser9 = User.create!(name: 'Hui Li', username: 'hui_li', password: '123456')
  otheruser10 = User.create!(name: 'Janet Lee', username: 'janet_lee', password: '123456')
  otheruser11 = User.create!(name: 'Joshua Chen', username: 'joshua', password: '123456')
  otheruser12 = User.create!(name: 'Justin White', username: 'justin', password: '123456')
  otheruser13 = User.create!(name: 'Norris Kwan', username: 'norris', password: '123456')
  otheruser14 = User.create!(name: 'Rod Shokrian', username: 'rod_shokrian', password: '123456')
  otheruser15 = User.create!(name: 'Ryan Rolfes', username: 'ryan_rolfes', password: '123456')
  otheruser16 = User.create!(name: 'Stephen Loquet', username: 'stephenL', password: '123456')
  otheruser17 = User.create!(name: 'Stephen Pangburn', username: 'stephenP', password: '123456')
  otheruser18 = User.create!(name: 'Tyler Eakes', username: 'tyler_eakes', password: '123456')
  otheruser19 = User.create!(name: 'Jack Zhu', username: 'jack_zhu', password: '123456')
  otheruser20 = User.create!(name: 'Kevin Shen', username: 'kevin_shen', password: '123456')


  photo1 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771271/fierce_xyjq3a.jpg',
    caption: "ballerina en pointe",
    location: "earth",
    author_id: demo1.id
    )

  photo2 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771420/infinity_neg30m.jpg',
    caption: "infinitely beautiful",
    location: "earth",
    author_id: demo1.id
    )

  photo3 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771107/mural_c8cg36.jpg',
    caption: "urban inspiration",
    location: "earth",
    author_id: demo1.id
    )

end
