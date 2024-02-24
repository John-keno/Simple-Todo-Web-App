var todoList = document.getElementById("todo-list");
var todoInput = document.getElementById("todo-input");
var todoAdd = document.getElementById("todo-add");

// Add a click event function to the add button
function addTask() {
  var todo = todoInput.value;
  // Check if the input is not empty
  if (todo) {
    // Create a new list item element
    var li = document.createElement("li");
    // Set the text content of the list item to the input value
    li.textContent = todo;
    // Append the list item to the list
    todoList.appendChild(li);
    // Clear the input field
    todoInput.value = "";
    // Add a double click event listener to the list item
    li.addEventListener("dblclick", function () {
      // Toggle the checked class on the list item
      li.classList.toggle("checked");
    });
    // Create a delete button element
    var deleteBtn = document.createElement("input");
    // Set the type, value and class of the delete button
    deleteBtn.type = "button";
    deleteBtn.value = "\u00D7";
    deleteBtn.className = "delete";
    // Append the delete button to the list item
    li.appendChild(deleteBtn);
    // Add a click event listener to the delete button
    deleteBtn.addEventListener("click", function () {
      // Remove the list item from the list
      var confirmDelete = confirm(
        "Are you sure you want to delete this task?\n'" + li.innerText + "'"
      );
      if (confirmDelete === true) {
        todoList.removeChild(li);
      } else {
        alert("Your task remains!");
      }
    });
    // Create an edit button element
    var editBtn = document.createElement("input");
    // Set the type, value and class of the edit button
    editBtn.type = "button";
    editBtn.value = "\u270E";
    editBtn.className = "edit";
    // Append the edit button to the list item
    li.appendChild(editBtn);
    // Add a click event listener to the edit button
    editBtn.addEventListener("click", function () {
      // Prompt the user to enter a new task
      var taskText = li.innerText;
      var newTodo = prompt("Update your task: ", taskText);
      // Check if the user entered a valid task
      if (newTodo && newTodo !== taskText) {
        // Update the text content of the list item
        li.textContent = newTodo;
        // Append the delete and edit buttons to the list item
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
      } else if (!newTodo) {
        alert("Task cannot be empty. No changes made");
      }
    });
  } else {
    alert("Field cannot be empty. Please enter a task.");
  }
}
