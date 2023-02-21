const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const deleteAllBtn = document.querySelector("#deleteAllBtn");

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

	// Add the checkbox, label, and delete button to the task element
	newTask.appendChild(checkbox);
	newTask.appendChild(label);
	
	const deleteButton = document.createElement("button");
	deleteButton.innerText = "remove";
	deleteButton.classList.add("btn"); // Add a class to the delete button
	deleteButton.classList.add("btn-warning"); // Add a class to the delete button
	deleteButton.addEventListener("click", function() {
		newTask.remove(); // Remove the task from the list
	});

	newTask.appendChild(deleteButton);

	// Add the task to the task list
	document.querySelector("#taskList").appendChild(newTask);

	// Clear the input field
	taskInput.value = "";
});

deleteAllBtn.addEventListener("click", function() { // Add this code
	const taskList = document.querySelector("#taskList");
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild); // Remove all task elements from the list
	}
});
