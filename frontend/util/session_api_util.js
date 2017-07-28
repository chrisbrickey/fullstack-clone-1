export const ajaxSignup = user => {

  return(
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: user
    })
  );
};

export const ajaxLogin = user => {

  return(
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: user
    })
  );
};

export const ajaxLogout = user => {

  return(
    $.ajax({
      method: 'DELETE',
      url: '/api/session',
      data: user
    })
  );
};
