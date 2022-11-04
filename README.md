# ToDoApp

## Author: Mary Kariuki

## Available Scripts

### Phase One

**branch : context-settings**


### Phase four
Phase 4, we will finalize the functionality of the application by connecting to live servers for login, authorization, and data access

**branch: api-integration**

Technical Requirements / Notes
Technical requirements for the core application are unchanged from the prior phases, with the addition of Performing actual HTTP requests with an Authenticated API server:

- Alter the Add, Toggle Complete, and Delete functions within your to do application to use your API instead of in memory state.

- Fetch the current list of items from the database on application start
- Whenever you add/update/delete an item, refresh the state so the user can instantly see the change

-Alter the Login Context to use the server to login users instead of our mock users list.
Be sure to store the token in state as well as in a cookie so you can reference it later.





##### References

<https://github.com/codefellows/seattle-code-javascript-401d48>
