class Skill < ActiveRecord::Base
  attr_accessible :name

  belongs_to :project

  def as_json(options = {})
    super({ :only => [:name] }.merge(options))
  end
end
