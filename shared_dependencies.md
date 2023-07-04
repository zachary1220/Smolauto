Shared Dependencies:

1. Exported Variables:
   - `comments`: An array to store the comments for each webpage.
   - `tasks`: An array to store the tasks created by the user.

2. Data Schemas:
   - `CommentSchema`: Defines the structure of a comment with properties like `id`, `text`, `timestamp`, and `url`.
   - `TaskSchema`: Defines the structure of a task with properties like `id`, `description`, `status`, and `dueDate`.

3. ID Names of DOM Elements:
   - `commentInput`: The input field for entering a new comment.
   - `taskInput`: The input field for entering a new task.
   - `commentList`: The container for displaying the list of comments.
   - `taskList`: The container for displaying the list of tasks.
   - `saveCommentButton`: The button for saving a new comment.
   - `addTaskButton`: The button for adding a new task.

4. Message Names:
   - `SAVE_COMMENT`: Message sent when a new comment is saved.
   - `ADD_TASK`: Message sent when a new task is added.
   - `DELETE_COMMENT`: Message sent when a comment is deleted.
   - `UPDATE_TASK`: Message sent when a task is updated.

5. Function Names:
   - `saveComment()`: Function to save a new comment.
   - `addTask()`: Function to add a new task.
   - `deleteComment()`: Function to delete a comment.
   - `updateTask()`: Function to update a task.
   - `getComments()`: Function to retrieve comments from Chrome Storage.
   - `getTasks()`: Function to retrieve tasks from Chrome Storage.