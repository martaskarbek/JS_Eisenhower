const removeButton = document.querySelector('delete');
const markAsDone = document.querySelector('.mark_as_done');
let storageContentUI = [];
let storageContentUN = [];
let storageContentNI = [];
let storageContentNN = [];
const storageKeys = ['ui', 'un', 'nn', 'ni'];

function main() {
    getNewTaskContent();
    getDataFromStorage();
}

function getNewTaskContent() {
    const addButton = document.querySelectorAll('.add_task');
    addButton.forEach(button => button.addEventListener('click', function() {
        const inputValue = this.parentElement.getElementsByClassName('task_holder').item(0);
        createNewTask(inputValue);
        const quarterName = this.parentElement.parentElement.id;
        if (quarterName === "ui") {
            storageContentUI.push(inputValue.value);
            localStorage.setItem('ui', JSON.stringify(storageContentUI));
        }
        if (quarterName === "un") {
            storageContentUN.push(inputValue.value);
            localStorage.setItem('un', JSON.stringify(storageContentUN));
        }
        if (quarterName === "ni") {
            storageContentNI.push(inputValue.value);
            localStorage.setItem('ni', JSON.stringify(storageContentNI));
        }
        if (quarterName === "nn") {
            storageContentNN.push(inputValue.value);
            localStorage.setItem('nn', JSON.stringify(storageContentNN));
        }
    }))
}

function createNewTask(inputValue) {
    const createTask = function(inputValue){
        const template = document.querySelector('#task-template');
        const clone = document.importNode(template.content, true);
        clone.querySelector('.task');
        clone.querySelector('.mark_as_done');
        clone.querySelector('.content_handler').textContent = inputValue.value;
        clone.querySelector('.delete');
        return clone;
    };
    const task = createTask(inputValue);
    inputValue.parentElement.parentElement.appendChild(task);
}

function getDataFromStorage() {
    const notesShow =  document.querySelectorAll('.quarter');
    let uiData = JSON.parse(localStorage.getItem("ui"));
    let niData = JSON.parse(localStorage.getItem("ni"));
    let unData = JSON.parse(localStorage.getItem("un"));
    let nnData = JSON.parse(localStorage.getItem("nn"));

        for (let j=0; j<uiData.length; j++) {
            let inputValue2 = uiData[j];
            createNewTask(inputValue2);
        };


}

function removeTask() {

}

main();