export const ajaxFetchComment = (id) => {

  return (
    $.ajax({
      method: 'GET',
      url: `api/comments/${id}`
    })
  );
};


export const ajaxCreateComment = (comment) => {

  return(
    $.ajax({
      method: 'POST',
      url: `api/photos/${comment.photo_id}/comments`,
      data: {comment}
      })
  );
};

export const ajaxDestroyComment = (id) => {

  return(
    $.ajax({
      method: 'DELETE',
      url: `api/comments/${id}`
    })
  );
};
