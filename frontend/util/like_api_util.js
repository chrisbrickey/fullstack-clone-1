export const ajaxCreateLike = (data) => {
  console.log("in ajaxCreateLike");
  return(
    $.ajax({
      method: 'POST',
      url: 'api/likes',
      data
    })
  );
};


export const ajaxDestroyLike = (data) => {
  console.log("in ajaxDestroyLike");

  return(
    $.ajax({
      method: 'DELETE',
      url: '/api/likes',
      data
    })
  );
};
