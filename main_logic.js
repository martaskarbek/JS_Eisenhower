
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
    let inputContent = document.querySelector('.task_holder');

    addButton.forEach(button => button.addEventListener('click', function() {
        let taskValue = inputContent.value;
        console.log(this.parentElement.getElementsByClassName('task_holder').item(0).value);
    }))

}

main();