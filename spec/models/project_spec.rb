require 'spec_helper'

describe Project do

  describe 'nested attributes' do
    before do

      json = {
        "title" => "My Amazing Project",
        "skills_attributes" => [
          { "name" => "Ruby" },
          { "name" => "AJAX" },
          { "name" => "Backbone" }
        ]
      }

      @project = Project.new(json)
    end

    it "should have filled in all the skills" do
      @project.skills.length.should eq(3)
      @project.skills.first.name.should eq("Ruby")
    end

    it "should give me a hash with as_json" do
      @project.as_json.class.should eq(Hash)
    end

    it "should give me a string with to_json" do
      @project.to_json.class.should eq(String)
    end

  end

end