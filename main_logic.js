const removeButton = document.querySelector('delete');
const markAsDone = document.querySelector('.mark_as_done');
let storageContent = [];

function main() {
    getNewTaskContent();
}

function getNewTaskContent() {
    const addButton = document.querySelectorAll('.add_task');
    addButton.forEach(button => button.addEventListener('click', function() {
        const inputValue = this.parentElement.getElementsByClassName('task_holder').item(0);
        createNewTask(inputValue);
     /*   localStorage.setItem('note', JSON.stringify(inputValue.value));*/
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

}

function removeTask() {

}

main();