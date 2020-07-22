let storageContentUI = [];
let storageContentUN = [];
let storageContentNI = [];
let storageContentNN = [];
const storageKeys = ['ui', 'un', 'nn', 'ni'];

function main() {
    addNewTask();
    getDataFromStorage();

}

function addNewTask() {
    const addButton = document.querySelectorAll('.add_task');
    addButton.forEach(button => button.addEventListener('click', function() {
        const inputValue = this.parentElement.getElementsByClassName('task_holder').item(0);
        if (inputValue.value !== "") {
            const quarterName = this.parentElement.parentElement.id;
            console.log(quarterName);
            createNewTask(inputValue.value, inputValue.parentElement.parentElement);
            if (quarterName === 'ui') {
                if (localStorage.getItem("ui") !== null) {
                    storageContentUI = JSON.parse(localStorage.getItem("ui"));
                }
                storageContentUI.push(inputValue.value);
                localStorage.setItem('ui', JSON.stringify(storageContentUI));
            }
            if (quarterName === "un") {
                if (localStorage.getItem("un") !== null) {
                    storageContentUN = JSON.parse(localStorage.getItem("un"));
                }
                storageContentUN.push(inputValue.value);
                localStorage.setItem('un', JSON.stringify(storageContentUN));
            }
            if (quarterName === "ni") {
                if (localStorage.getItem("ni") !== null) {
                    storageContentNI = JSON.parse(localStorage.getItem("ni"));
                }
                storageContentNI.push(inputValue.value);
                localStorage.setItem('ni', JSON.stringify(storageContentNI));
            }
            if (quarterName === "nn") {
                if (localStorage.getItem("nn") !== null) {
                    storageContentNN = JSON.parse(localStorage.getItem("nn"));
                }
                storageContentNN.push(inputValue.value);
                localStorage.setItem('nn', JSON.stringify(storageContentNN));
            }
        }
      inputValue.value = "";
    }))

}


function createNewTask(inputValue, targetNode) {
    const createTask = function(inputValue){
        const template = document.querySelector('#task-template');
        const clone = document.importNode(template.content, true);
        clone.querySelector('.task');
        clone.querySelector('.mark_as_done');
        clone.querySelector('.content_handler').textContent = inputValue;
        clone.querySelector('.delete');
        return clone;
    };
    const task = createTask(inputValue);
    targetNode.appendChild(task);

}

function removeTask() {

}

function getDataFromStorage() {
    for (let i = 0; i < storageKeys.length; i++) {
        let key = storageKeys[i];
        let restoredData = JSON.parse(localStorage.getItem(`${key}`));
        if (restoredData.length != 0) {
            for (let j = 0; j < restoredData.length; j++) {
                let inputValue2 = restoredData[j];
                if (restoredData !== null) {
                    createNewTask(inputValue2, document.querySelector(`#${key}`));
                };
            };
        };
    }
}

main();


