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
    let uiData = JSON.parse(localStorage.getItem("ui"));
    let niData = JSON.parse(localStorage.getItem("ni"));
    let unData = JSON.parse(localStorage.getItem("un"));
    let nnData = JSON.parse(localStorage.getItem("nn"));
    if(uiData !== null) {
        for (let j = 0; j < uiData.length; j++) {
            let inputValue2 = uiData[j];
            createNewTask(inputValue2, document.querySelector('#ui'));
        }
    }
    if(unData !== null) {
        for (let k = 0; k < unData.length; k++) {
            let inputValue3 = unData[k];
            createNewTask(inputValue3, document.querySelector('#un'));
        }
    }
    if(niData !== null) {
        for (let n = 0; n < niData.length; n++) {
            let inputValue4 = niData[n];
            createNewTask(inputValue4, document.querySelector('#ni'));
        }
    }
    if(nnData !== null) {
        for (let m = 0; m < nnData.length; m++) {
            let inputValue5 = nnData[m];
            createNewTask(inputValue5, document.querySelector('#nn'));
        }
    }



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

