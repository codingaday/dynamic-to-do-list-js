document.addEventListener("DOMContentLoaded", () => {
  // Selecting DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to load tasks from Local Storage
  const loadTasks = function () {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // Don't save again to Local Storage
  };

  // Function to save tasks to Local Storage
  const saveTasks = function () {
    const tasks = [];
    taskList.querySelectorAll("li").forEach((li) => {
      tasks.push(li.firstChild.textContent); // Save only the task text
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Function to add a new task
  const addTask = function (taskText = null, save = true) {
    // Get value from the input if taskText is not provided
    const text = taskText || taskInput.value.trim();

    if (text === "") {
      alert("Enter a task");
      return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = text;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = () => {
      taskList.removeChild(li);
      saveTasks(); // Update Local Storage after removal
    };

    // Append remove button to the list item
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Save to Local Storage if needed
    if (save) {
      saveTasks();
    }
  };

  // Add event listeners for the add button and Enter key
  addButton.addEventListener("click", () => addTask());
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load tasks from Local Storage on page load
  loadTasks();
});
