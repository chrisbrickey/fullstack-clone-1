export const ajaxCreateComment = (photoId, body) => {
  console.log("in ajaxCreateComment");

  return(
    $.ajax({
      method: 'POST',
      url: `api/photos/${photoId}/comments`,
      data: {comment: { photo_id: photoId, body: body}}
      })
  );
};


export const ajaxDestroyComment = (comment) => {
  console.log("in ajaxDestroyComment");

  return(
    $.ajax({
      method: 'DELETE',
      url: `api/comments/${comment.id}`
    })
  );
};
