# insta-étoile

[insta-étoile](www.insta-étoile.com) is a full-stack web app inspired by Instagram.  Danseur Étoile (literally 'star dancer' in French) is the highest rank within the Paris Opera Ballet. insta-étoile provides a visual platform to enable performing artists of all kinds to instantly share and showcase photos of their craft while building a community of supporters and followers. insta-étoile will further the careers of performing artists by broadcasting their experience in a beautiful and digestible format, linking robust immersive profiles with an artist's community and following.

## Features Highlight

#### Detail View with Edit
A graceful modal overlays each users profile page when one of their images is selected.  It shows details of the post and allows the creator of a post to edit the details with instant update across the application.

![Detail](https://res.cloudinary.com/dckkkjkuz/image/upload/v1501280102/view_edit_cxeurx.png)

#### Drag & Drop Upload
Users can upload with ease with drag/drop functionality.  They can also double-click in the same spot if they prefer to select a file from their directories.

![Upload](https://res.cloudinary.com/dckkkjkuz/image/upload/v1501280085/drag_drop_tvz3tc.png)

#### Likes & Comments
The Like button toggles to indicate whether the current user has or has not liked a particular post and the sum total likes for each post updates live.  Comments can be added on-the-spot by simply typing and returning. They are instantly viewable by all users.  Post and delete buttons are also made available to the user for further guidance and ease-of-use.  Likes and comments are protected such that only the user initiating either a like or comment can reverse/delete it.

![Likes_Comments](https://res.cloudinary.com/dckkkjkuz/image/upload/v1501280092/likes_comments_jtghyt.png)

#### Secure Authentication
Users are greeted with an intuitive login page that guides them to successful login with informative and friendly error messages.

![Login](https://res.cloudinary.com/dckkkjkuz/image/upload/v1501280097/login_gt0iav.png)

## Technology

insta-étoile is a single-page web application that utilizes a Ruby on Rails backend and React.js/Redux frontend with various dependencies.

- [Frontend technology][frontend]
- [Backend technology][backend]
[frontend]: docs/frontend.md
[backend]: docs/backend.md

## Project Design

- [View Wireframes][wireframes]
- [React Components][components]
- [API endpoints][api-endpoints]
- [DB schema][schema]
- [Sample State][sample-state]

[READMEdev]: docs/READMEdev.md
[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Future Development

#### Video Play
Performing artists will be able to upload and share videos of rehearsals and performances.

#### Robust User Profiles
Performing artists will be able to synthesize and showcase their experience and talent in a full page profile.  They can share their career journey with pictures and videos accompanied by supporting text. The user profile template will allow for some curation but will maintain a consistent structure that is easy for others to absorb.

#### Explore & Follow
Casting staff and the broader community will be able to search and follow performing artists.  A user's photo feed will consists only of posts from artists that they are following.  Users will be able to search for performing artists based on content of their posts and profiles.
