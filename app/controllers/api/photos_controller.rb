class Api::PhotosController < ApplicationController

#adjust to be only the photos of people that the curent user is following
def index
  @photos = Photo.all
end

def show
  @photo = Photo.find(params[:id])
end

def create
  @photo = Photo.create!(photo_params)
  @photo.author_id = current_user.id

  if @photo.save
    render "api/photos/show"
  else
    render(
      json: @photo.errors.full_messages,
      status: 422
    )
  end

end

def update
  @photo = current_user.photos.find(params[:id])

  #using update will return true/false depending on whether validations passed
  if @user.update(user_params)
    render "api/photos/show"
  else
    render(
      json: @user.errors.full_messages,
      status: 422
    )
  end

end

def destroy
  @photo = current_user.photos.find(params[:id])
  @photo.destroy
  render "api/photos/index"
end

private

#must populate author_id internally
def photo_params
  params.require(:photo).permit(
    :photo_url,
    :caption,
    :location)
end

end
