const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");

addTaskBtn.addEventListener("click", function() {
	// Create a new task element
const newTask = document.createElement("li");

// Create a checkbox and a label for the task text
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.addEventListener("click", function() {
  // Toggle the "completed" class when the checkbox is clicked
  newTask.classList.toggle("completed");
});
const label = document.createElement("label");
label.innerText = taskInput.value;

// Add the checkbox and label to the task element
newTask.appendChild(checkbox);
newTask.appendChild(label);

// Add the task to the task list
document.querySelector("#taskList").appendChild(newTask);


	// Clear the input field
	taskInput.value = "";
});
