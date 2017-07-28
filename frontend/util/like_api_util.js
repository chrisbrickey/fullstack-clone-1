export const ajaxCreatePhotoLike = (photoId) => {
  console.log("in ajaxCreatePhotoLike");

  return(
    $.ajax({
      method: 'POST',
      url: `api/photos/${photoId}/like`,
      data: {like: { likable_id: photoId, likable_type: "Photo"}}
      })
  );
};


export const ajaxDestroyPhotoLike = (photoId) => {
  console.log("in ajaxDestroyPhotoLike");

  return(
    $.ajax({
      method: 'DELETE',
      url: `api/photos/${photoId}/like`,
      data: {like: { likable_id: photoId, likable_type: "Photo"}}
    })
  );
};

//likable_type MUST be exact spelling of model we are referencing, e.g. "Photo" or "Comment"
