const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const pendingTasks = document.querySelector(".pendingTasks");
const deleteBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
  let userValue = inputBox.value;//getting the value entered by the user
  console.log(userValue);
  if (userValue.trim() != 0) {
    addBtn.classList.add("active");//The add button is active if user enters a value 
  } else {
    addBtn.classList.remove("active");
  }
};
showTask(); // calling show task function 

//onclick function to add button
addBtn.onclick = () => {
  let userEnteredValue = inputBox.value;
  let getLocalStorage = localStorage.getItem("new todo");
  if (userEnteredValue == 0) {
    window.alert("Todo list is empty");//if the user value is empty browser shows the alert pop-up
  } else if (getLocalStorage == null) {
    listArray = [];//if storage is null then the array will be empty  
  } else if (userEnteredValue != 0) { // if not then the value is pushed to array
    listArray.push(userEnteredValue);
    localStorage.setItem("new todo", JSON.stringify(listArray));//javascript value to json
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
  pendingTasks.textContent = listArray.length; // returns the length of the arrayList
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
