class User < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :bio, :mission, :image_url
end
