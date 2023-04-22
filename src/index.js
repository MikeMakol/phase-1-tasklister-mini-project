document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")
  //attach event listener to the form
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    tasksList(e.target.querySelector("#new-task-description").value)

    // reset form
    taskForm.reset();
  })
});

//ul where new tasks will live on the DOM
function tasksList(e) { 
  const taskLI = document.createElement("li");
  taskLI.textContent = `${e} `;

  const btn = document.createElement("button");
  btn.textContent = "X";
  btn.addEventListener("click", removeTask);

  taskLI.appendChild(btn);
  document.getElementById("tasks").appendChild(taskLI);
  
}

//remove a task
function removeTask(e) {
  e.target.parentNode.remove();
}
