class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(photo_params)
    @follow.follower_id = current_user.id

    if @follow.save
      render "api/follows/show"
    else
      render(
        json: @follow.errors.full_messages,
        status: 422
      )
    end

  end

  def destroy
    @follow = current_user.follower_records.find(params[:id]) # searches only follow records where current_user_id is the follower_id
    @follow.destroy
    render "api/follows/show"
  end

  private

  def follow_params
    params.require(:photo).permit(
      :id,
      :following_id)
  end

end
