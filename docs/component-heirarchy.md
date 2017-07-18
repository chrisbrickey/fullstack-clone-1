## Component Hierarchy


**App**
  - NavBar & Footer


**LoginContainer**
   - Login
     * PhonePhoto
     * AuthForm


**HomeContainer**
   - Home
    * PhotoIndex
      * PhotoItem
    * FollowingIndex
      * FollowingItem


**UploadContainer**
  - Upload


**ProfileContainer**
  - Profile
    * ProfileBanner
    * UserPhotos
      * PhotoSnapshot




## Routes

|Path              | Component              |
|------------------|------------------------|
| "/"              | "FeedContainer"        |
| "/users/:userId" | "ProfileContainer"     |


**To be replaced with modals at the root route**

|Path              | Component              |
|------------------|------------------------|
| "/hello"         | "AuthFormContainer"    |
| "/upload"        | "UploadContainer"      |


**Bonus I**

|Path                   | Component              |  Detail                                                    |
|-----------------------|------------------------|------------------------------------------------------------|
| "/users/:userId"      | "OtherUserContainer"   | conditionally renders when this user is NOT current user   |
| "/users/:userId"      | "ProfileContainer"     | conditionally renders if current user                      |
| "/users/:userId/edit" | "ProfileEditContainer" | for MVP, user page will just be the collection of the users photos where they can add/delete, no settings-etc |


**Bonus II**

Use usernames as wildcards in the routes instead of userIds.  This might require forbidding usernames that match with predetermined list of possible routes so users can't exploit the site via their username.
