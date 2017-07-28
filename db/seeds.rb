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
Like.destroy_all
Comment.destroy_all

#will rollback all seeds if any issues; create! fails loudly so can get more information on errors
ActiveRecord::Base.transaction do
  demo1 = User.create!(name: 'Chris Brickey', username: 'chri5brickey1', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501138321/headshot_crop4_cjy4sm.jpg', tagline: 'always be dancing | www.chrisbrickey.com')
  demo2 = User.create!(name: 'Chris Brickey', username: 'chri5brickey2', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501138321/headshot_crop4_cjy4sm.jpg', tagline: 'always be dancing | www.chrisbrickey.com')
  demo3 = User.create!(name: 'Chris Brickey', username: 'chri5brickey3', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501138321/headshot_crop4_cjy4sm.jpg', tagline: 'always be dancing | www.chrisbrickey.com')
  demo4 = User.create!(name: 'Chris Brickey', username: 'chri5brickey4', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501138321/headshot_crop4_cjy4sm.jpg', tagline: 'always be dancing | www.chrisbrickey.com')
  demo5 = User.create!(name: 'Chris Brickey', username: 'chri5brickey5', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501138321/headshot_crop4_cjy4sm.jpg', tagline: 'always be dancing | www.chrisbrickey.com')

  otheruser1 = User.create!(name: 'Alice Chen', username: 'alice_chen', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser2 = User.create!(name: 'Arvind Ravi', username: 'arvind', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser3 = User.create!(name: 'Atom Crimi', username: 'atom_crimi', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser4 = User.create!(name: 'Cherry Wing-Yu Lam', username: 'cherry', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser5 = User.create!(name: 'Clare Hsu', username: 'clare_hsu', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser6 = User.create!(name: 'David Corson-Knowles', username: 'david_corson-knowles', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser7 = User.create!(name: 'Graham Paye', username: 'graham', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser8 = User.create!(name: 'Hiro Obara', username: 'hiro_obara', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser9 = User.create!(name: 'Hui Li', username: 'hui_li', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser10 = User.create!(name: 'Janet Lee', username: 'janet_lee', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser11 = User.create!(name: 'Joshua Chen', username: 'joshua', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser12 = User.create!(name: 'Justin White', username: 'justin', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser13 = User.create!(name: 'Norris Kwan', username: 'norris', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser14 = User.create!(name: 'Rod Shokrian', username: 'rod_shokrian', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser15 = User.create!(name: 'Ryan Rolfes', username: 'ryan_rolfes', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser16 = User.create!(name: 'Stephen Loquet', username: 'stephenL', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser17 = User.create!(name: 'Stephen Pangburn', username: 'stephenP', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser18 = User.create!(name: 'Tyler Eakes', username: 'tyler_eakes', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser19 = User.create!(name: 'Jack Zhu', username: 'jack_zhu', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")
  otheruser20 = User.create!(name: 'Kevin Shen', username: 'kevin_shen', password: '123456', profile_img_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png', tagline: "I'm good at computers")



  photo24 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501092784/ftbnu6b6jw4qonu1hqrd.jpg',
    caption: 'beach',
    location: '',
    author_id: demo5.id
    )

  photo23 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501257003/redandwhite_smaller_ypraxd.png',
    caption: 'connection',
    location: '',
    author_id: demo5.id
    )

  photo22 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501086228/hw6ozj3mdelhn5wpsn2x.jpg',
    caption: 'sway',
    location: '',
    author_id: demo5.id
    )

  photo21 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501053343/backbend_vh5ltl.jpg',
    caption: 'flexing',
    location: '',
    author_id: demo5.id
    )

  photo20 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501053244/golden_vxtdsu.jpg',
    caption: 'golden',
    location: '',
    author_id: demo5.id
    )



  photo19 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501140295/ff8f850aaa3e2a69f32b55430c6de8a8_bhibsr.jpg',
    caption: 'stretch',
    location: '',
    author_id: demo4.id
    )

  photo18 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501053595/swan_lake_inls3n.jpg',
    caption: '',
    location: 'on swan lake',
    author_id: demo4.id
    )

  photo17 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771579/dark_red_l5qojp.jpg',
    caption: 'superhero',
    location: '',
    author_id: demo4.id
    )

  photo16 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501053260/leap_z9x4xf.jpg',
    caption: 'momentum',
    location: '',
    author_id: demo4.id
    )

  photo15 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771428/coral_nvemtt.jpg',
    caption: 'shape',
    location: '',
    author_id: demo4.id
    )



  photo14 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501257012/wallpaperStudio_smaller_scnd7x.png',
    caption: 'love the view',
    location: 'the studio',
    author_id: demo3.id
    )

  photo13 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771443/trio_wfx6xb.jpg',
    caption: 'trio',
    location: '',
    author_id: demo3.id
    )

  photo12 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771634/sunset_oqve3y.jpg',
    caption: 'grande sunset',
    location: '',
    author_id: demo3.id
    )

  photo11 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500933186/fif8afswdavqfxnwomtu.jpg',
    caption: '',
    location: '',
    author_id: demo3.id
    )

  photo10 = Photo.create!(
    photo_url: ' https://res.cloudinary.com/dckkkjkuz/image/upload/v1501140409/male3_tljxqb.jpg',
    caption: 'wind up',
    location: '',
    author_id: demo3.id
    )



  photo9 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501140370/d4d1f242a23027cf871a355974e9a079_jk55ia.jpg',
    caption: 'magenta',
    location: '',
    author_id: demo2.id
    )

  photo8 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501070203/rxoiqsrwolgmdfxkmjro.jpg',
    caption: 'in motion',
    location: '',
    author_id: demo2.id
    )

  photo7 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771455/shadows_r0laa1.jpg',
    caption: 'long shadows',
    location: '',
    author_id: demo2.id
    )

  photo6 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501054164/couple_izifdx.jpg',
    caption: 'love',
    location: '',
    author_id: demo2.id
    )


  photo5 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501138480/coat-sml_yrydyv.png',
    caption: 'en l\'air',
    location: '',
    author_id: demo2.id
    )



  photo4 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501053292/silouette_q78lo5.jpg',
    caption: 'profile',
    location: '',
    author_id: demo1.id
    )

  photo3 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501257022/mural_smaller_rsvfhf.png',
    caption: 'urban inspiration',
    location: '',
    author_id: demo1.id
    )

  photo2 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771420/infinity_neg30m.jpg',
    caption: 'infinitely beautiful',
    location: '',
    author_id: demo1.id
    )

  photo1 = Photo.create!(
    photo_url: 'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500771271/fierce_xyjq3a.jpg',
    caption: 'en pointe',
    location: '',
    author_id: demo1.id
    )


  likeX = Like.create!(user_id: demo5.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo5.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo5.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo5.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo5.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo5.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo5.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo5.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo5.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo5.id, likable_id: __, likable_type: 'Photo')

  likeX = Like.create!(user_id: demo4.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo4.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo4.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo4.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo4.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo4.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo4.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo4.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo4.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo4.id, likable_id: __, likable_type: 'Photo')

  likeX = Like.create!(user_id: demo3.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo3.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo3.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo3.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo3.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo3.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo3.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo3.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo3.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo3.id, likable_id: __, likable_type: 'Photo')

  likeX = Like.create!(user_id: demo2.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo2.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo2.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo2.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo2.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo2.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo2.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo2.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo2.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo2.id, likable_id: __, likable_type: 'Photo')

  likeX = Like.create!(user_id: demo1.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo1.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo1.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo1.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo1.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo1.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo1.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo1.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo1.id, likable_id: __, likable_type: 'Photo')
  likeX = Like.create!(user_id: demo1.id, likable_id: __, likable_type: 'Photo')




















end
