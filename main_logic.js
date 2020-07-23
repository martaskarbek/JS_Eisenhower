const storageKeys = ['ui', 'un', 'nn', 'ni'];

function main() {
    getDataFromStorage();
    addNewTask();
    markAsDone();
    removeTask();
}

function addNewTask() {
    let tempArray = [];
    const addButton = document.querySelectorAll('.add_task');
    addButton.forEach(button => button.addEventListener('click', function () {
        const inputValue = this.parentElement.querySelector('.task_holder');
        if (inputValue.value) {
            let quarterName = this.parentElement.parentElement.id;
            createNewTask(inputValue.value, inputValue.parentElement.parentElement);
            for (let key = 0; key < storageKeys.length; key++) {
                let keyName = storageKeys[key];
                if (quarterName === `${keyName}`) {
                    if (localStorage.getItem(`${keyName}`)) {
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
    const createTask = function (inputValue) {
        const template = document.querySelector('#task-template');
        const clone = document.importNode(template.content, true);
        clone.querySelector('.content_handler').textContent = inputValue;
        return clone;
    };
    const task = createTask(inputValue);
    targetNode.appendChild(task);
}

function removeTask() {
    let tempArray = [];
    const deleteButton = document.querySelectorAll('.delete');
    deleteButton.forEach(button => button.addEventListener('click', function () {
        const keyName = this.parentElement.parentElement.id;
        tempArray = JSON.parse(localStorage.getItem(`${keyName}`));
        console.log(this.parentElement.getElementsByClassName('content_handler').item(0).textContent);
        tempArray.forEach(item => {
            if (item[0] === this.parentElement.getElementsByClassName('content_handler').item(0).textContent) {
                const index = tempArray.indexOf(item);
                tempArray.splice(index, 1);
                console.log(tempArray);
                localStorage.setItem(`${keyName}`, JSON.stringify(tempArray));
            }
            this.parentElement.remove();
        });
    }));
}

function getDataFromStorage() {
    for (let i = 0; i < storageKeys.length; i++) {
        let key = storageKeys[i];
        let restoredData = JSON.parse(localStorage.getItem(`${key}`));
        if (restoredData) {
            for (let j = 0; j < restoredData.length; j++) {
                let inputValue2 = restoredData[j][0];
                createNewTask(inputValue2, document.querySelector(`#${key}`));
                if (restoredData[j][1] === "done") {
                    setCheckbox(inputValue2);
                }
            }
        }
    }
}

function setCheckbox(inputValue2) {
    const checkboxes = document.querySelectorAll('.doneMark');
    checkboxes.forEach(checkbox => {
        if (checkbox.parentElement.parentElement.getElementsByClassName('content_handler').item(0).textContent === inputValue2) {
            checkbox.setAttribute('checked', 'checked');
        }
    });
}

function markAsDone() {
    const checkboxes = document.querySelectorAll('.doneMark');
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', function () {
        let container = this.parentElement.parentElement.parentElement.id;
        let taskName = this.parentElement.parentElement.getElementsByClassName('content_handler').item(0).textContent;
        let restoreData = JSON.parse(localStorage.getItem(container));
        for (let ii = 0; ii < restoreData.length; ii++) {
            let taskNameFromArray = restoreData[ii][0];
            if (taskNameFromArray === taskName) {
                if (restoreData[ii][1] === 'notDone') {
                    restoreData[ii] = [taskName, 'done'];

                } else {
                    restoreData[ii] = [taskName, 'notDone'];
                }
            }
            localStorage.setItem(container, JSON.stringify(restoreData));
        }
    }));
}

main();


