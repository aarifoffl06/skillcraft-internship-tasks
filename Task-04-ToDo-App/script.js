const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

function addTask(){

const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");

if(taskInput.value === ""){
alert("Please enter a task");
return;
}

const task = {
text: taskInput.value,
date: taskDate.value,
completed: false
};

tasks.push(task);

saveTasks();
renderTasks();

taskInput.value = "";
taskDate.value = "";

}

function renderTasks(){

taskList.innerHTML = "";

tasks.forEach((task,index)=>{

const li = document.createElement("li");

const taskInfo = document.createElement("div");
taskInfo.className = "task-info";

taskInfo.innerHTML =
`<strong class="${task.completed ? "completed" : ""}">${task.text}</strong>
<small>${task.date || ""}</small>`;

const actions = document.createElement("div");
actions.className = "actions";

const completeBtn = document.createElement("button");
completeBtn.innerText = "✓";
completeBtn.onclick = () => toggleComplete(index);

const editBtn = document.createElement("button");
editBtn.innerText = "Edit";
editBtn.onclick = () => editTask(index);

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.onclick = () => deleteTask(index);

actions.appendChild(completeBtn);
actions.appendChild(editBtn);
actions.appendChild(deleteBtn);

li.appendChild(taskInfo);
li.appendChild(actions);

taskList.appendChild(li);

});

}

function toggleComplete(index){

tasks[index].completed = !tasks[index].completed;

saveTasks();
renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
renderTasks();

}

function editTask(index){

const newTask = prompt("Edit task", tasks[index].text);

if(newTask !== null){
tasks[index].text = newTask;
saveTasks();
renderTasks();
}

}

function saveTasks(){

localStorage.setItem("tasks", JSON.stringify(tasks));

}