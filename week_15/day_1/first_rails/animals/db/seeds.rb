# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Animal.delete_all()

Animal.create({
    name: "Slug",
    diet: "Lettuce"
  })

Animal.create({
    name: "Tiger",
    diet: "Smaller Tigers"
  })

Animal.create({
    name: "Dolphin",
    diet: "Jellyfish"
  })

Animal.create({
    name: "Bee",
    diet: "Plant stuff"
  })

Animal.create({
    name: "Pumpkin",
    diet: "Pasta"
  })
