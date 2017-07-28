class Api::CommentsController < ApplicationController

def create
  @comment = Comment.new(comment_params)
  @comment.user_id = current_user.id

  if @comment.save
    render "api/comments/show"
  else
    render(
      json: @comment.errors.full_messages,
      status: 422
    )
  end

end


#should I be destroying by params[:id] instead?
def destroy
  @comment = Comment.find_by(comment_params)

  if @comment.destroy
    render "api/comments/show"
  else
    render(
      json: @comment.errors.full_messages,
      status: 422
    )
  end

end




private

#may need to change spelling of photo_id
def comment_params
  params.require(:comment).permit(:body, :photo_id)
end

end
