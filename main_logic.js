
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
        createNewTask(inputValue.value, inputValue.parentElement.parentElement);
        const quarterName = this.parentElement.parentElement.id;
        if (quarterName === "ui") {
            storageContentUI2 = JSON.parse(localStorage.getItem("ui"));
            console.log(inputValue);
            console.log(String(inputValue.value));
            for (let aa = 0; aa <storageContentUI2.length; aa++){
                let a = storageContentUI2[aa];
                storageContentUI.push('a');}
        /*    storageContentUI.push(inputValue.value);*/
            localStorage.setItem('ui', JSON.stringify(storageContentUI));
            console.log(storageContentUI);
        }
        if (quarterName === "un") {
            /*storageContentUN.push(inputValue.value);*/
            localStorage.setItem('un', JSON.stringify(storageContentUN));
        }
        if (quarterName === "ni") {
           /* storageContentNI.push(inputValue.value);*/
            localStorage.setItem('ni', JSON.stringify(storageContentNI));
        }
        if (quarterName === "nn") {
 /*           storageContentNN.push(inputValue.value);*/
            localStorage.setItem('nn', JSON.stringify(storageContentNN));
        }
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

function getDataFromStorage() {
/*    const notesShow =  document.querySelectorAll('.quarter');
    let uiData = JSON.parse(localStorage.getItem("ui"));
    let niData = JSON.parse(localStorage.getItem("ni"));
    let unData = JSON.parse(localStorage.getItem("un"));
    let nnData = JSON.parse(localStorage.getItem("nn"));

    for (let j=0; j<uiData.length; j++) {
        let inputValue2 = uiData[j];
        document.getElementsByClassName("quarter").item(0);
        createNewTask(inputValue2, document.querySelector('#ui'));*/
/*    };*/


}

function removeTask() {

}

main();
/*
function getDataFromStorage() {
    let restoredData = JSON.parse(localStorage.getItem("ui"));
    for (let i=0; i<storageKeys.length; i++) {
        let targetNode = storageKeys[i];
        if (restoredData.length != 0){
            for (let j = 0; j < restoredData.length; j++) {
                /!*inputValue = notesShow[i];*!/
                let inputValue2 = uiData[j];
                console.log(document.getElementsByClassName("quarter").item(0));
                console.log(createNewTask(inputValue2, document.querySelector(`#${targetNode}`)));
            };
        };
    };
}*/

