class Project < ActiveRecord::Base
  attr_accessible :body, :title, :url, :user_id

  belongs_to :user
end
