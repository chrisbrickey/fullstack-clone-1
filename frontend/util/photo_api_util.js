
//eventually this method may need to have an argument (current user) so that it only shows the photos of peple that the current user follows
//therefore, it would need an extra item in the ajax request...data
export const ajaxFetchAllPhotos = () => {
  console.log("in ajaxFetchAllPhotos");
  return(
    $.ajax({
      method: 'GET',
      url: '/api/photos',
    })
  );
};


export const ajaxFetchSinglePhoto = (id) => {
  console.log("in ajaxFetchSinglePhoto");
  return(
    $.ajax({
      method: 'GET',
      url: `/api/photos/${id}`
    })
  );
};


export const ajaxCreatePhoto = (data) => {
  console.log("in ajaxCreatePhoto");
  return(
    $.ajax({
      method: 'POST',
      url: 'api/photos',
      data
    })
  );
};


export const ajaxUpdatePhoto = (photo) => {
  console.log("in ajaxUpdatePhoto");
  // console.log(photo);
  // console.log(photo.id);
  return(
    $.ajax({
      method: 'PATCH',
      url: `/api/photos/${photo.id}`,
      data: { photo }
    })
  );
};


export const ajaxDestroyPhoto = (photo) => {
  console.log("in ajaxDestroyPhoto");
  // console.log(id);
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/photos/${photo.id}`,
    })
  );
};
