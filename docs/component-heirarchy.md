## Component Hierarchy

WIP - will pull from sample below




## Routes

|Path              | Component              |
|------------------|------------------------|
| "/"              | "FeedContainer"        |
| "/users/:userId" | "ProfileContainer"     |


## To be replaced with modals at the root route

|Path              | Component              |
|------------------|------------------------|
| "/hello"         | "AuthFormContainer"    |
| "/upload"        | "UploadContainer"      |


### Bonus

|Path                   | Component   |
|-----------------------|------------------------|
| "/users/:userId"      | "OtherUserContainer"   |   (conditionally renders when this user is NOT current user)
| "/users/:userId"      | "ProfileContainer"     |   (if current user)
| "/users/:userId/edit" | "ProfileEditContainer" |   (for MVP user page will just be the collection of the users photos where they can add/delete, no settings-etc)

Use usernames as wildcards in the routes instead of userIds.  This might require forbidding usernames that match with predetermined list of possible routes so users can't exploit the site via their username.



=============from sample proposal===========


**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**NotesContainer**
 - NotesHeader
  * NoteIndex

**NotebookContainer**
 - NotebookHeader
  + NoteIndex

**SearchResultsContainer**
 - Search
 - NoteIndex

**TagContainer**
 - NotebookHeader
  + NoteIndex

**NoteIndex**
 - NoteIndexItem
  + NoteDetail
    + NoteTools
    - NotebookSearch
    - Tags
      - Tag
    * Note

**NewNoteContainer**
 - NewNote
  - RTETools
  - NewNoteButton

**Search**

**NewNotebook**
 - NewNotebook

**NewTag**
 - NewTag

**NotebookSearch**
 + AutoSearch
 * AutoSearchResults

**TagsSearch**
 + AutoSearch
 * AutoSearchResults
