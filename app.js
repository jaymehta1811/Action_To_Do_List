let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = '';  // Clear the input field
        updateTaskList();
        updateProgress();
    }
    console.log(tasks);
};

const updateTaskList = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="taskItem">
                <div class="task ${task.completed ? 'completed' : ''}">
                    <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} />
                    <p class="scrollable-paragraph">${task.text}</p>
                </div>
                <div class="icons">
                    <img src="Edit_text.png" alt="" onclick="editTask(${index})">
                    <img src="delet.png" alt="" onclick="deleteTask(${index})">
                </div>
            </div>
        `;

        listItem.querySelector('.checkbox').addEventListener('change', () => toggleTaskComplete(index));
        taskList.appendChild(listItem);
    });
};

const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
    updateProgress();
};

const editTask = (index) => {
    const newTaskText = prompt("Edit task:", tasks[index].text);
    if (newTaskText !== null) {
        tasks[index].text = newTaskText.trim();
        updateTaskList();
    }
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTaskList();
    updateProgress();
};

const updateProgress = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    document.getElementById('numbers').innerText = `${completedTasks} / ${totalTasks}`;
    document.getElementById('progress').style.width = `${progress}%`;
};

document.getElementById('newtask').addEventListener('click', function (e) {
    e.preventDefault();
    addTask();
});

