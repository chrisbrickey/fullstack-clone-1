class Api::PhotosController < ApplicationController

def index

  if params[:author_id]
    @photos = User.find(params[:author_id]).photos
  else
    #adjust to be only the photos of people that the curent user is following
    @photos = Photo.all
    # render "api/photos"
  end

end


def show
  @photo = Photo.find(params[:id])
end


def create
  @photo = Photo.new(photo_params)
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
  if @photo.update(photo_params)
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
  render "api/photos/show"
end


private

def photo_params
  params.require(:photo).permit(
    :photo_url,
    :caption,
    :location)
end

end
