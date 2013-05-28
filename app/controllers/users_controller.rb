class UsersController < ApplicationController

  before_filter :authenticate_user!, :only => [:update, :me]

  def index
    @users = User.all
    render :json => @users
  end

  def show
    @user = User.find(params[:id])
    render :json => @user
  end

  def followers
    @user = User.find(params[:id])
    render :json => @user.followers
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(params[:user])
    render :json => @user
  end

  def me
    render :json => current_user
  end
end
