export const ajaxFetchAllPhotos = () => {

  return(
    $.ajax({
      method: 'GET',
      url: '/api/photos',
    })
  );
};


export const ajaxFetchSinglePhoto = (id) => {

  return(
    $.ajax({
      method: 'GET',
      url: `/api/photos/${id}`
    })
  );
};


export const ajaxCreatePhoto = (data) => {

  return(
    $.ajax({
      method: 'POST',
      url: 'api/photos',
      data
    })
  );
};


export const ajaxUpdatePhoto = (photo) => {

  return(
    $.ajax({
      method: 'PATCH',
      url: `/api/photos/${photo.id}`,
      data: { photo }
    })
  );
};


export const ajaxDestroyPhoto = (photo) => {

  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/photos/${photo.id}`,
    })
  );
};
