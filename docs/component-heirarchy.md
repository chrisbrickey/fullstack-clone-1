## Component Hierarchy

WIP - will pull from sample below

## Routes

Note: I'd prefer the AuthFormContainer and the UploadContainer to be at the root route, perhaps modals that just overlay when the user needs them.

|Path   | Component   |
|-------|-------------|
| "/hello" | "AuthFormContainer" |
| "/" | "FeedContainer" |
| "/upload" | "UploadContainer" |
| "/:username" | "OtherUserContainer" |
| "/:username" | "ProfileViewContainer" |
| "/edit/:username" | "ProfileEditContainer" |




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
