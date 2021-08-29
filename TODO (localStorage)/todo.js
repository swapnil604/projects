// getting requird elements

const inputField = document.querySelector(".inputField input");
const inputBtn = document.querySelector(".inputField button");
const deleteBtn = document.querySelector(".footer button");
const todoList = document.querySelector(".todoList");

// enabling/disabling add button

inputField.onkeyup = () => {
    let inputValue = inputField.value;
    if (inputValue.trim() != 0) {
        inputBtn.classList.add("active");
    } else {
        inputBtn.classList.remove("active");
    }
};

showTasks();

// clicked on add button

inputBtn.onclick = () => {
    let userEnteredValue = inputField.value;
    let storage = localStorage.getItem("New Item");

    if (storage == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(storage);
    }

    listArray.push(userEnteredValue);
    localStorage.setItem("New Item", JSON.stringify(listArray));
    showTasks();
    inputBtn.classList.remove("active");
};

// showTasks function

function showTasks() {
    let storage = localStorage.getItem("New Item");

    if (storage == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(storage);
    }

    const pendingTask = document.querySelector(".pendingTasks");
    pendingTask.textContent = listArray.length;

    if (listArray.length > 0) {
        deleteBtn.classList.add("active");
    } else {
        deleteBtn.classList.remove("active");
    }

    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });

    todoList.innerHTML = newLiTag;
    inputField.value = "";
}

// delete task function

function deleteTask(index) {
    let storage = localStorage.getItem("New Item");
    listArray = JSON.parse(storage);
    listArray.splice(index, 1);
    localStorage.setItem("New Item", JSON.stringify(listArray));
    showTasks();
}

// clicked on task function

deleteBtn.onclick = () => {
    listArray = [];
    localStorage.setItem("New Item", JSON.stringify(listArray));
    showTasks();
}