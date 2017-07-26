export const ajaxFetchAllUsers = () => {
  console.log("in ajaxFetchAllUsers");
  return(
    $.ajax({
      method: 'GET',
      url: 'api/users'
    })
  );
};

export const ajaxFetchSingleUser = (userId) => {
  console.log("in ajaxFetchSingleUser");
  return(
    $.ajax({
      method: 'GET',
      url: `api/users/${userId}`
    })
  );
};


// export const ajaxFetchUsersPhotos = (userId) => {
//   console.log("in ajaxFetchUsersPhotos");
//   return(
//     $.ajax({
//       method: 'GET',
//       url: ''
//     })
//   );
// };
