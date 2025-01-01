let addBtn = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let input = document.querySelector(".input");

let tasksArray = [];
if (localStorage.getItem("tasks")) {
  tasksArray = JSON.parse(localStorage.getItem("tasks"));
}

getData();

addBtn.onclick = function () {
  if (input.value !== "") {
    addTask(input.value);
    input.value = "";
  }
};

tasksDiv.addEventListener("click", (ele) => {
  if (ele.target.classList.contains("delete")) {
    deleteTask(ele.target.parentElement.getAttribute("data-id"));
    ele.target.parentElement.remove();
  }
  if (ele.target.classList.contains("task")) {
    toggleTaskStatus(ele.target.getAttribute("data-id"));
    ele.target.classList.toggle("done");
  }
});

function addTask(taskContent) {
  const task = {
    id: Date.now(),
    title: taskContent,
    completedTask: false,
  };

  tasksArray.push(task);

  createTaskElements(tasksArray);

  localStorageData(tasksArray);
}

function createTaskElements(tasksArray) {
  tasksDiv.innerHTML = "";
  tasksArray.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";

    if (task.completedTask) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));

    let deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";

    deleteBtn.appendChild(document.createTextNode("Delete"));

    div.appendChild(deleteBtn);

    tasksDiv.appendChild(div);
  });
}

function localStorageData(tasksArray) {
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

function getData() {
  let data = localStorage.getItem("tasks");

  if (data) {
    let tasks = JSON.parse(data);
    createTaskElements(tasks);
  }
}

function deleteTask(taskId) {
  tasksArray = tasksArray.filter((task) => task.id != taskId);
  localStorageData(tasksArray);
}

function toggleTaskStatus(taskId) {
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].id == taskId) {
      tasksArray[i].completedTask == false
        ? (tasksArray[i].completedTask = true)
        : (tasksArray[i].completedTask = false);
    }
  }
  localStorageData(tasksArray);
}
