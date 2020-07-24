const storageKeys = ['ui', 'un', 'nn', 'ni'];

(() => {
    getDataFromStorage();
    addNewTask();
    markAsDone();
    removeTask();
    editData();
})();

function getDataFromStorage() {
    for (let i = 0; i < storageKeys.length; i++) {
        const key = storageKeys[i];
        const restoredData = JSON.parse(localStorage.getItem(key));
        if (restoredData) {
            for (let j = 0; j < restoredData.length; j++) {
                const taskName = restoredData[j][0];
                createNewTask(taskName, document.querySelector(`#${key}`));
                if (restoredData[j][1] === "done") {
                    setCheckbox(taskName);
                }
            }
        }
    }
}

function createNewTask(taskName, targetNode) {
    const template = document.querySelector('#task-template');
    const taskElement = document.importNode(template.content, true);
    taskElement.querySelector('.content_handler').textContent = taskName;
    targetNode.appendChild(taskElement);
}

function setCheckbox(taskName) {
    const checkboxes = document.querySelectorAll('.doneMark');
    checkboxes.forEach(checkbox => {
        if (checkbox.parentElement.parentElement.getElementsByClassName('content_handler').item(0).textContent === taskName) {
            checkbox.setAttribute('checked', 'checked');
        }
    });
}

function addNewTask() {
    let tasks = [];
    const addButtons = document.querySelectorAll('.add_task');
    addButtons.forEach(button => button.addEventListener('click', event => {
        const inputElement = event.target.parentElement.querySelector('.task_holder');
        if (inputElement.value) {
            const quarterName = event.target.parentElement.parentElement.id;
            createNewTask(inputElement.value, inputElement.parentElement.parentElement);
            for (let key = 0; key < storageKeys.length; key++) {
                const keyName = storageKeys[key];
                if (quarterName === `${keyName}`) {
                    if (localStorage.getItem(`${keyName}`)) {
                        tasks = JSON.parse(localStorage.getItem(`${keyName}`));
                    }
                    const singleTask = [inputElement.value, 'notDone'];
                    tasks.push(singleTask);
                    localStorage.setItem(`${keyName}`, JSON.stringify(tasks));
                    tasks = [];
                }
            }
        }
        inputElement.value = "";
    }))
}

function markAsDone() {
    const checkboxes = document.querySelectorAll('.doneMark');
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', function () {
        let container = this.parentElement.parentElement.parentElement.id;
        let taskName = this.parentElement.parentElement.querySelector('.content_handler').textContent;
        let restoreData = JSON.parse(localStorage.getItem(container));
        for (let i = 0; i < restoreData.length; i++) {
            let taskNameFromArray = restoreData[i][0];
            if (taskNameFromArray === taskName) {
                restoreData[i] = restoreData[i][1] === 'notDone' ? [taskName, 'done'] : [taskName, 'notDone'];
            }
            localStorage.setItem(container, JSON.stringify(restoreData));
        }
    }));
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

function editData() {
    const editButtons = document.querySelectorAll('.edit');
    editButtons.forEach(editButton => editButton.addEventListener('click', function () {
        let taskName = this.parentElement.getElementsByClassName('content_handler').item(0).textContent;
        let newTaskName = prompt("Edit task: ", taskName);
        let container = this.parentElement.parentElement.id;
        let restoreData = JSON.parse(localStorage.getItem(container));
        for (let i = 0; i < restoreData.length; i++) {
            let markNameFromArray = restoreData[i][1];
            let taskNameFromArray = restoreData[i][0];
            if (taskNameFromArray === taskName && newTaskName !== null){
                restoreData[i] = [newTaskName, markNameFromArray];
                this.parentElement.getElementsByClassName('content_handler').item(0).textContent = newTaskName;
            }
        }
        localStorage.setItem(container, JSON.stringify(restoreData));
    }));
}
