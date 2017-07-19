```js

{

  if user is NOT logged in (default state):
  session: {
    currentUser: null,
    errors: ["Invalid login credentials"]
  },


  if user logged in:
  session: {
    currentUser: 1,
    errors: []
  },


  forms: {
    signUp: {errors:[]},
    logIn: {errors: ["Invalid login credentials"]},
    createPhoto: {errors: ["Image must be uploaded"]}
  },


  users: {

    loggedInUser: 1,

    byId: {
      1: {
        id: 1,
        username: "xx",
        name: "xx",
        profileImgUrl: 'xx.png',
        tagline: "xx",
        followersCount: 10
        followers: [2, ...],
        followingCount: 11
        following: [2, ...],
        photosCount: 15,
        photos: [2, ...]
      },

      2: {
        ...
      },
    },

  },


  photos: {

    currentPhoto: 4,

    byPopularity: [4, ...],

    byId: {
      1: {
        id: 1,
        userId: 1,
        username: 'xx',
        profileImgUrl: 'xx.png',
        photoUrl: 'xx.png',
        description: "xx",
        location: "xx",
        uploadDate: 'xx',
        comments: [2, ...],
        likesCount: 10,
        likers: ["xx", ...]  
      },

      2: {
        ...
      }
    },

  },


  comments: {

    byId: {
      1: {
        id: 1,
        body: "xx",
        username: "xx"
        user_id: 22,
        likesCount: 10,
        likers: ["xx", ...]
      },

      2: {
        ...
      }
    }

  }


}
  ```
