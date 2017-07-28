export const ajaxCreateComment = (comment) => {
  console.log("in ajaxCreateComment");
  console.log(comment);

  return(
    $.ajax({
      method: 'POST',
      url: `api/photos/${comment.photo_id}/comments`,
      data: {comment}
      })
  );
};

//could just pass in the comment's id instead of the whole comment and grab it from params
export const ajaxDestroyComment = (comment) => {
  console.log("in ajaxDestroyComment");
  // console.log(comment);

  return(
    $.ajax({
      method: 'DELETE',
      url: `api/comments/${comment.id}`
    })
  );
};
