document.getElementById('taskForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value;

  const li = document.createElement('li');
  li.textContent = taskText;
  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
});
