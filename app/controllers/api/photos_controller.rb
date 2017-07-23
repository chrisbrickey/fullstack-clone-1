class Api::PhotosController < ApplicationController

#adjust to be only the photos of people that the curent user is following
def index
  @photos = Photo.all
end

def show
  @photo = Photo.find(params[:id])
end


#commenting out current_user line for testing purposes
def create
  @photo = Photo.create!(photo_params)
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

#replaced line 32 with line 31 for testing purposes
def update
  @photo = Photo.find(params[:id])
  # @photo = current_user.photos.find(params[:id])

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

#replaced line 49 with line 48 for testing purposes
def destroy
  @photo = Photo.find(params[:id])
  # @photo = current_user.photos.find(params[:id])
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
