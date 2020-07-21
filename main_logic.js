
const removeButton = document.querySelector('delete');
const markAsDone = document.querySelector('.mark_as_done');
const UItasks = document.querySelector('.ui');
const UNtaskas = document.querySelector('.un');
const NItasks = document.querySelector('.ni');
const NNtaskas = document.querySelector('.nn');

function main() {
    getNewTaskContent();
}

function getNewTaskContent() {
    const addButton = document.querySelectorAll('.add_task');
    addButton.forEach(button => button.addEventListener('click', function() {
        const inputValue = this.parentElement.getElementsByClassName('task_holder').item(0);
        createNewTask(inputValue);
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
    console.log(inputValue.parentElement.parentElement);
    inputValue.parentElement.parentElement.appendChild(task);

}

main();