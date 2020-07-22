const storageKeys = ['ui', 'un', 'nn', 'ni'];

function main() {
    addNewTask();
    getDataFromStorage();
}

function addNewTask() {
    let tempArray = [];
    const addButton = document.querySelectorAll('.add_task');
    addButton.forEach(button => button.addEventListener('click', function() {
        const inputValue = this.parentElement.getElementsByClassName('task_holder').item(0);
        if (inputValue.value !== "") {
            const quarterName = this.parentElement.parentElement.id;
            createNewTask(inputValue.value, inputValue.parentElement.parentElement);
            for (let key=0; key<storageKeys.length; key++) {
                let keyName = storageKeys[key];
                if (quarterName === `${keyName}`) {
                    console.log('blabla');
                    if (localStorage.getItem(`${keyName}`) !== null) {
                        tempArray = JSON.parse(localStorage.getItem(`${keyName}`));
                    }
                    let singleTask = [inputValue.value, 'notDone'];
                    tempArray.push(singleTask);
                    localStorage.setItem(`${keyName}`, JSON.stringify(tempArray));
                    tempArray = [];
                }
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
        clone.querySelector('.mark');
        clone.querySelector('.content_handler').textContent = inputValue;
        clone.querySelector('.delete');
        clone.querySelector('p');
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
        if (restoredData !== null) {
            for (let j = 0; j < restoredData.length; j++) {
                let inputValue2 = restoredData[j][0];
                    createNewTask(inputValue2, document.querySelector(`#${key}`));
            };
        };
    }
}

function markAsDone() {

}

main();


