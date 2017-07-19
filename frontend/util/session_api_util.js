export const ajaxSignup = user => {
  console.log("in ajaxSignup");
  return(
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: user
    })
  );
};

export const ajaxLogin = user => {
  console.log("in ajaxLogin");
  return(
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: user
    })
  );
};

export const ajaxLogout = user => {
  console.log("in ajaxLogout");
  return(
    $.ajax({
      method: 'DELETE',
      url: '/api/session',
      data: user
    })
  );
};
