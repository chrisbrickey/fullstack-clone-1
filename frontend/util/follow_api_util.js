export const ajaxFetchAllFollows = () => {

  return(
    $.ajax({
      method: 'GET',
      url: '/api/follows',
    })
  );
};

export const ajaxCreateFollow = (followingId) => {

  return(
    $.ajax({
      method: 'POST',
      url: `api/users/${followingId}/follows`,
      data: {follow: { following_id: followingId }}
    })
  );
};

export const ajaxDestroyFollow = (followId) => {

  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/follows/${followId}`,
    })
  );
};
