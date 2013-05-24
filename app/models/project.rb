class Project < ActiveRecord::Base
  attr_accessible :body, :title, :url, :user_id, :skills_attributes

  belongs_to :user
  has_many :skills

  accepts_nested_attributes_for :skills

  def as_json(options = {})
    super({ :include => { :skills => { :only => [:id, :name] } },
      :only => [:id, :title, :body, :url, :user_id] }.merge(options))
  end
end
