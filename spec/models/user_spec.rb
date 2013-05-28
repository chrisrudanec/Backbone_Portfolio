require 'spec_helper'

describe User do
  before do
    @user = User.make!
  end

  describe "with some followers" do
    before do
      3.times { @user.follows.make! }
    end

    it "should know how many followers it has" do
      @user.reload.followers.length.should == 3
      @user.followers.first.class.should eq(User)
    end
  end
end