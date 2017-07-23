
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

// export const ajaxFetchAllPhotos = () => {
//   console.log("in ajaxFetchAllPhotos");
//   return(
//     $.ajax({
//       method: 'GET',
//       url: '/api/photos'
//     })
//   );
// };
