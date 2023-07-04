```javascript
let comments = [];
let tasks = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'SAVE_COMMENT') {
        saveComment(request.data);
    } else if (request.message === 'ADD_TASK') {
        addTask(request.data);
    } else if (request.message === 'DELETE_COMMENT') {
        deleteComment(request.data);
    } else if (request.message === 'UPDATE_TASK') {
        updateTask(request.data);
    }
});

function saveComment(commentData) {
    comments.push(commentData);
    chrome.storage.sync.set({comments: comments}, function() {
        console.log('Comment saved');
    });
}

function addTask(taskData) {
    tasks.push(taskData);
    chrome.storage.sync.set({tasks: tasks}, function() {
        console.log('Task added');
    });
}

function deleteComment(commentId) {
    comments = comments.filter(comment => comment.id !== commentId);
    chrome.storage.sync.set({comments: comments}, function() {
        console.log('Comment deleted');
    });
}

function updateTask(taskData) {
    tasks = tasks.map(task => task.id === taskData.id ? taskData : task);
    chrome.storage.sync.set({tasks: tasks}, function() {
        console.log('Task updated');
    });
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

getComments();
getTasks();
```