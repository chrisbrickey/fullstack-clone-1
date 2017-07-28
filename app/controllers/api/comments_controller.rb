class Api::CommentsController < ApplicationController


def show
  @comment = Comment.find(params[:id])
  render "api/comments/show"
end

def create
  @comment = Comment.new(comment_params)
  @comment.user_id = current_user.id
  @comment.username = current_user.username

  if @comment.save
    render "api/comments/show"
  else
    render(
      json: @comment.errors.full_messages,
      status: 422
    )
  end

end

def destroy
  @comment = Comment.find_by(id: params[:id])

  if !@comment
    head :not_found
  elsif !logged_in?
    head :unauthorized
  elsif @comment.user_id != current_user.id
    render(
      json: ["This is not your comment."],
      status: 403
    )
  elsif @comment.destroy
    render "api/comments/show"
  else
    render(
      json: @comment.errors.full_messages,
      status: 422
    )
  end

end

private

def comment_params
  params.require(:comment).permit(:body, :photo_id, :id)
end

end
