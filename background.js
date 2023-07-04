```javascript
let comments = [];
let tasks = [];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ comments: [] });
  chrome.storage.sync.set({ tasks: [] });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'SAVE_COMMENT') {
    saveComment(request.comment);
  } else if (request.type === 'ADD_TASK') {
    addTask(request.task);
  } else if (request.type === 'DELETE_COMMENT') {
    deleteComment(request.commentId);
  } else if (request.type === 'UPDATE_TASK') {
    updateTask(request.task);
  }
});

function saveComment(comment) {
  comments.push(comment);
  chrome.storage.sync.set({ comments: comments });
}

function addTask(task) {
  tasks.push(task);
  chrome.storage.sync.set({ tasks: tasks });
}

function deleteComment(commentId) {
  comments = comments.filter(comment => comment.id !== commentId);
  chrome.storage.sync.set({ comments: comments });
}

function updateTask(task) {
  tasks = tasks.map(t => t.id === task.id ? task : t);
  chrome.storage.sync.set({ tasks: tasks });
}

function getComments() {
  chrome.storage.sync.get('comments', (data) => {
    comments = data.comments;
  });
}

function getTasks() {
  chrome.storage.sync.get('tasks', (data) => {
    tasks = data.tasks;
  });
}
```