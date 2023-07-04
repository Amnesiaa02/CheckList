const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const checklist = document.getElementById('checklist');

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const task = taskInput.value.trim();

  if (task !== '') {
    const listItem = document.createElement('li');
    const checkmark = document.createElement('div');
    const taskText = document.createElement('div');
    const removeButton = document.createElement('button');

    checkmark.classList.add('checkmark');
    taskText.classList.add('task');
    taskText.textContent = task;
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'Remove';

    listItem.appendChild(checkmark);
    listItem.appendChild(taskText);
    listItem.appendChild(removeButton);
    checklist.appendChild(listItem);

    checkmark.addEventListener('click', toggleTask);
    removeButton.addEventListener('click', removeTask);

    taskInput.value = '';
    taskInput.focus();
  }
}

function toggleTask(event) {
  const checkmark = event.target;
  checkmark.classList.toggle('checked');
}

function removeTask(event) {
  const listItem = event.target.parentNode;
  checklist.removeChild(listItem);
}
