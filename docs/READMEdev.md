# Etoile (working title)

This visual platform enables performing artists (ballet dancers to start) to share and showcase photos and videos of their craft while building a community of supporters and followers. The initial release will be an Instagram clone. The longer-term vision is to further the careers of performing artists by providing robust user profiles that are much more immersive than sites like LinkedIn and AngelList.

[Heroku](https://lit-mesa-39574.herokuapp.com)
[Github](https://github.com/chrisbrickey/fullstack-clone-1)
[Trello](https://trello.com/b/uhBuM9rx/etoile-working-title)


## Minimum Viable Product

- [ ] Login - new account creation, login, and guest/demo login
- [ ] Posts - users can post images and videos
- [ ] Likes - users can like the posts of other users
- [ ] Comments - users can comment on posts
- [ ] Follows & Feeds - users can follow other users, creating a photo feed for each user
- [ ] Hosting - via Heroku with custom domain name
- [ ] README - production version in root directory


## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema.md]: schema.md


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** User can create account, login, and use a guest/demo login.

### Phase 2: Posts Model, API, and Components (2 days)

**Objective:** User can create, read, edit, and destroy posts. Other users can see these posts.

### Phase 3: Likes (1 day)

**Objective:** Users can like and un-like posts by other users.

### Phase 4: Comments (1 day)

**Objective:** Users can comment on posts.

### Phase 5: Follows (1 day)

**Objective:** Users can follow other users.

### Phase 6: - Feeds (1 day)

**Objective:** Users homepage is a feed of posts from users that they follow.


### Bonus Features (TBD)
- [ ] Profiles - users can create robust profiles to serve as dance resumes ('a la LinkedIn but more immersive)
- [ ] Messaging - users can direct message other users
- [ ] Tags - users can use hashtags to tag and find related posts
