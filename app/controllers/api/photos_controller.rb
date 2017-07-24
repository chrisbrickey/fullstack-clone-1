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
  # @photo = Photo.new(photo_params)
  @photo = Photo.create!(photo_params)

  #neither of above works; @photo is always nil when I try to assign author_id here, works fine if I send author_id from front-end
  # @photo.author_id = current_user.id

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
  #use below for testing without auth
  # @photo = Photo.find(params[:id])
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
  #use below for testing without auth
  # @photo = Photo.find(params[:id])
  @photo = current_user.photos.find(params[:id])
  @photo.destroy
  render "api/photos/show"
end

private

#must populate author_id internally but listed here so can test during development
def photo_params
  params.require(:photo).permit(
    :photo_url,
    :caption,
    :location,
    :author_id)
end

end
