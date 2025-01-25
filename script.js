document.addEventListener("DOMContentLoaded", () => {
  //Selecting DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  const addTask = function () {
    //Getting value from the input
    const taskText = taskInput.value.trim();
    //Setting conditions for adding and removing tasks
    if (taskText === "") {
      alert("Enter a task");
    } else {
      const li = document.createElement("li");
      li.textContent = taskText;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");
      removeBtn.onclick = () => {
        taskList.removeChild(li);
      };
      li.appendChild(removeBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    }
  };

  //Calling the function upon clicking the add task button
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
  addTask();
});
