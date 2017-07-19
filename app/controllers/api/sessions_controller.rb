class Api::SessionsController < ApplicationController

  #login
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render(
        json: { errors: ["invalid username/password combination"] },
        status: 401
      )
    end

  end

  #logout
  def destroy
    @user = current_user

    if @user
      logout
      render(
        json: {},
        status: 200
      )

    else
      render(
        json: { errors: ["please sign up or log in"] },
        status: 404
      )

    end
  end

end
