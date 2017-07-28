export const ajaxFetchAllUsers = () => {

  return(
    $.ajax({
      method: 'GET',
      url: 'api/users'
    })
  );
};

export const ajaxFetchSingleUser = (userId) => {

  return(
    $.ajax({
      method: 'GET',
      url: `api/users/${userId}`
    })
  );
};
