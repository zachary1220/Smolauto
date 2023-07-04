```javascript
let tasks = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addTaskButton').addEventListener('click', addTask);
    getTasks();
});

function getTasks() {
    chrome.storage.sync.get('tasks', function(data) {
        if (data.tasks) {
            tasks = data.tasks;
            displayTasks();
        }
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = {
        id: new Date().getTime(),
        description: taskInput.value,
        status: 'pending',
        dueDate: new Date()
    };
    tasks.push(newTask);
    chrome.storage.sync.set({tasks: tasks}, function() {
        taskInput.value = '';
        displayTasks();
    });
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(function(task) {
        const taskElement = document.createElement('li');
        taskElement.textContent = `${task.description} - ${task.status} - ${task.dueDate}`;
        taskList.appendChild(taskElement);
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'UPDATE_TASK') {
        tasks = tasks.map(task => {
            if (task.id === request.task.id) {
                return request.task;
            } else {
                return task;
            }
        });
        chrome.storage.sync.set({tasks: tasks}, function() {
            displayTasks();
        });
    }
});
```