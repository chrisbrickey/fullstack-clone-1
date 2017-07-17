
  *default state (no user logged in)*
  session: {
    currentUser: null,
    errors: ["Invalid login credentials"]
  },

  *if user logged in*
  session: {
    currentUser: {
      id: 1,
      username: "xx",
      profile_image: "xx"
    },
    errors: []
  },

  forms: {
    signUp: {errors:[]},
    logIn: {errors:["Invalid login credentials"]},
    createPhoto: {errors: ["Image must be uploaded"]}
  },

  user: {
    id: 1,
    username: "xx",
    name: "xx",
    photo_url: 'xx.png',
    tagline: "xx",
    followersCount: 10
    followers: [2, ...],
    followingCount: 11
    following: [2, ...],
    photosCount: 15,
    photos: [2, ...]
  },

  feed: {
    1: {
      photo_id: 1,
      username: 'xx',
      profile_photo_url: 'xx.png',
      photo_url: 'xx.png',
      description: "xx",
      upload_date: 'xx',

      comments: {
        1: {
          username: 'xx',
          body: "xx"
        }
      },

      likes: {
        1: {
          username: 'xx'
        }
      }
    },

    2: ...
  }

  photo: {
    id: 1,
    photo_url: 'xx.png',
    caption: "xx",
    upload_date: 'XXXX-XX-XX',

    author_id: 1,
    author_photo_url: 'xx.png',
    author_username: "xx",

    likesCount: 10,
    commentsCount: 5,

    likes: {
      1: {
        id: 1,
        username: "xx"
      }
      2: ...
    }

    comments: {
      1: {
        username: "xx",
        body: "xx"
      }
      2: ...
    }  
  }
