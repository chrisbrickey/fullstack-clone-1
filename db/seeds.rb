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
  demo1 = user.create!(name: 'Demo User1', username: 'demouser1', password: "123456")
  demo2 = user.create!(name: 'Demo User2', username: "demouser2", password: "123456")
  demo3 = user.create!(name: 'Demo User3', username: "demouser3", password: "123456")
  demo4 = user.create!(name: 'Demo User4', username: "demouser4", password: "123456")
  demo5 = user.create!(name: 'Demo User5', username: "demouser5", password: "123456")
  demo6 = user.create!(name: 'Demo User6', username: "demouser6", password: "123456")
  demo7 = user.create!(name: 'Demo User7', username: "demouser7", password: "123456")
  demo8 = user.create!(name: 'Demo User8', username: "demouser8", password: "123456")
  demo9 = user.create!(name: 'Demo User9', username: "demouser9", password: "123456")
  demo10 = user.create!(name: 'Demo User10', username: "demouser10", password: "123456")

end
