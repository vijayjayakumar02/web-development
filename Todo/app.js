const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
  let userValue = inputBox.value;
  console.log(userValue);
  if (userValue.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};
showTask();
addBtn.onclick = () => {
  let userEnteredValue = inputBox.value;
  let getLocalStorage = localStorage.getItem("new todo");
  if (userEnteredValue == 0) {
    window.alert("Todo list is empty");
  } else if (getLocalStorage == null) {
    listArray = [];
  } else if (userEnteredValue != 0) {
    listArray.push(userEnteredValue);
    localStorage.setItem("new todo", JSON.stringify(listArray));
    showTask();
    addBtn.classList.remove("active");
  } else {
    listArray = JSON.parse(getLocalStorage);
  }
};
function showTask() {
  let getLocalStorage = localStorage.getItem("new todo");
  if (getLocalStorage == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }
  const pendingTasks = document.querySelector(".pendingTasks");
  pendingTasks.textContent = listArray.length;
  if (listArray.length < 0) {
    deleteBtn.classList.add("active");
  } else {
    deleteBtn.classList.remove("active");
  }
  let newListTag = "";
  listArray.forEach((element, index) => {
    newListTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newListTag;
  inputBox.value = "";
}
function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("new todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("new todo", JSON.stringify(listArray));
  showTask();
}
deleteBtn.onclick = () => {
  listArray = [];
  localStorage.setItem("new todo", JSON.stringify(listArray));
  showTask();
};
