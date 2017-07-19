class Api::UsersController < ApplicationController

  #load all users
  def index
    @users = User.all
  end

  #show one user
  def show
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
  end

  #create a user (new account)
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "/"
    else
      render(
        json: @user.errors.full_messages,
        status: 422
      )
    end
  end

  #edit a user
  def update
    @user = User.find(params[:id])

    #why do we want the object to be returned even if it doesn't pass validation (functionality of update vs update_attributes)
    if @user.update(user_params)
      render "/"
    else
      render(
        json: @user.errors.full_messages,
        status: 422
      )
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
