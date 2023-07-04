```javascript
let comments = [];
let tasks = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('saveCommentButton').addEventListener('click', saveComment);
    document.getElementById('addTaskButton').addEventListener('click', addTask);
    getComments();
    getTasks();
});

function saveComment() {
    let commentInput = document.getElementById('commentInput');
    let comment = {
        id: Date.now(),
        text: commentInput.value,
        timestamp: new Date(),
        url: window.location.href
    };
    comments.push(comment);
    chrome.storage.sync.set({comments: comments}, function() {
        console.log('Comment saved');
    });
    commentInput.value = '';
}

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = {
        id: Date.now(),
        description: taskInput.value,
        status: 'pending',
        dueDate: new Date()
    };
    tasks.push(task);
    chrome.storage.sync.set({tasks: tasks}, function() {
        console.log('Task added');
    });
    taskInput.value = '';
}

function getComments() {
    chrome.storage.sync.get(['comments'], function(result) {
        comments = result.comments || [];
    });
}

function getTasks() {
    chrome.storage.sync.get(['tasks'], function(result) {
        tasks = result.tasks || [];
    });
}
```