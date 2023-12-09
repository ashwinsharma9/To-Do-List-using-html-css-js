let addButton = document.querySelector(".btn-input");
let textInput = document.querySelector(".inputbox");

let listOfTasks = document.querySelector(".list-container");


function addTask() {
    if (textInput.value === '') {
        alert("Type your task first!")
    } else {

        // adding tasks
        let list = document.createElement("li");
        list.textContent = textInput.value;
        listOfTasks.appendChild(list);

        // adding cross sign
        let crossIcon = document.createElement("span");
        crossIcon.textContent = "\u00d7";
        list.appendChild(crossIcon);

        // empty the space after adding each task
        textInput.value = "";

        // function to delete task(removeChild)
        function deleteTask() {
            listOfTasks.removeChild(list);
        }
        crossIcon.addEventListener("click", deleteTask);

        // function task completion(toggle, classList)
        function taskCompleted(){
            list.classList.toggle("completed");
        }
        list.addEventListener("click", taskCompleted)
    }
}

addButton.addEventListener("click", addTask)






































