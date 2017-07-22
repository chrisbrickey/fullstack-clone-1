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
      render "api/users/show"
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

    #using update will return true/false depending on whether validations passed
    if @user.update(user_params)
      render "api/users/show"
    else
      render(
        json: @user.errors.full_messages,
        status: 422
      )
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name)
  end

end
