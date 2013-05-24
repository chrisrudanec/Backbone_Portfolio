require 'spec_helper'

describe ProjectsController do
  before do
    @user = User.make!
  end

  describe 'POST to create' do
    before do
      json = Project.make(:user => @user).as_json.merge({
        :skills_attributes => ([Skill.make] * 3).as_json
      })
      json.delete :skills

      post :create, :project => json, :user_id => @user.id
    end

    it "should work" do
      expect(response).to be_success
    end

    it "should create a project and some skills" do
      expect(Project.count).to eq(1)
      expect(Skill.count).to eq(3)
    end

    it "should assign the skills to its proejct" do
      assigns(:project).skills.length.should eq(3)
    end
  end

end