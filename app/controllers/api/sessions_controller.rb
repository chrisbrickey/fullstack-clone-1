class Api::SessionsController < ApplicationController

  #login
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      # render "api/users/show"
      render(
        json: {},
        status: 200
      )
    else
      render(
        json: ["invalid username/password combination"],
        status: 401
      )
    end

  end

  #logout
  def destroy
    @user = current_user

    #Should I be rendering an empty object instead? {}
    if @user
      logout
      #how will it know this is a POST request NOT a DELETE request?
      render "/api/session"

    else
      render(
        json: ["please sign up or log in"],
        status: 404
      )

    end
  end

end
