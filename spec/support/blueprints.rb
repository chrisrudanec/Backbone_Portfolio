require 'machinist/active_record'

User.blueprint do
  first_name { Faker::Name.first_name }
  last_name { Faker::Name.last_name }
  image_url { '/uploads/me.jpg' }
  bio { [Faker::Company.catch_phrase, "from", Faker::Address.city].join(" ")}
  mission { Faker::Company.bs }
end

Project.blueprint do
  title { Faker::Lorem.words(rand(4) + 1).join(" ") }
  url { "http://#{Faker::Internet.domain_name}" }
  body { Faker::Lorem.words(50).join(" ") }
end

Skill.blueprint do
  name { Faker::Lorem.words(1).first }
end