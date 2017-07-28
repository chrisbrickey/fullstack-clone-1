class Api::CommentsController < ApplicationController


def show
  # debugger
  @comment = Comment.find(params[:id])
  render "api/comments/show"
end

def create
  # debugger
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


#should I be destroying by params[:id] or comment_params?
def destroy
  # debugger
  @comment = Comment.find_by(params[:id])

  if @comment.user_id === current_user.id

    if @comment.destroy
      render "api/comments/show"
    else
      render(
        json: @comment.errors.full_messages,
        status: 422
      )
    end

    render(
      json: ["This is not your comment."],
      status: 403
    )
  end

end




private

#may need to change spelling of photo_id
def comment_params
  params.require(:comment).permit(:body, :photo_id, :id)
end

end
