
let v = 0;
let m = 0;
let i = 0;
var k = 0;
let projectId = 1;
let userData = [];
// const BASE_URL = 'http://35.246.10.215:8081';
const BASE_URL = 'http://localhost:8080';


function panelSearch() {
    var children = document.getElementsByClassName("searchThis");
    search = document.getElementById("searchbar").value;
    
    if (search === "") {
        var myNode = document.getElementById("sidebarId");
    
        myNode.innerText = "";
        printProjects()
        return;
    }
    
    for (var i = 0; i < children.length; i++) {
        
        console.log(children[i].innerText);
        while (children[i].innerText != search) {
            if (children[i].innerText != search) {
                children[i].parentNode.parentNode.removeChild(children[i].parentNode);
            }
        }
    }
    
}

// function updateProgressBar(){
// p = form.length;
// z= 0;
// for(elements of taskList){
//     if (element.checked = true){
//     v++
//     }
// }
//     let progress = (z / p) * 100;
//     document.getElementById("progressBar").value = progress;
//     progressInt = parseInt(progress)
//     document.getElementById("progress1").innerText = progressInt + "%";

// }

function appendProject() {
    saveTasks();

    f = document.getElementById("form1");
    sidebarId = document.getElementById("sidebarId");
    projectTitle = document.getElementById("projectName").value;
    uniqueProjectId = projectId;
    userId = sessionStorage.getItem("usernameId");

    userData = {'projectName': projectTitle}
    
    makeRequest('POST', BASE_URL + '/ProjectAPI/api/project/create/' + userId, userData)
    .then((value) => {

        console.log("successfully registered");
        console.log(value);
    }).catch((error) => {
        console.warn(error);
    });

    if (projectTitle === "") {
        return;
    }

    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'list-group-item list-group-item-action bg-light">Dashboard2</a>');
    projectDiv.addEventListener('click', (ev) => {
        var myNode = document.getElementById("form1");
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);

    }
         printSavedProject(projectIdDiv.innerText, ev.target);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.id="deleteButton";
    deleteBtn.innerText="delete";
    deleteBtn.addEventListener('click', (ev) => {
    deleteTask(ev.target)
    ev.stopPropagation();
    });
    const projectIdDiv = document.createElement('div');
    // projectIdDiv.style.display="none";
    projectIdDiv.innerText=uniqueProjectId;

    projectDiv.append(projectTitle);
    projectDiv.append(deleteBtn);
    projectDiv.append(projectIdDiv);
    sidebarId.append(projectDiv)

    document.getElementById('projectName').value = ''

    const dataString = JSON.stringify(form1);
    sessionStorage.setItem('userData', dataString);

    var myNode = document.getElementById("form1");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);

    }
    projectId++
    userData = [];
}

function CreateProjectSidebarDiv(){
    saveTasks();

    f = document.getElementById("form1");
    sidebarId = document.getElementById("sidebarId");
    projectTitle = document.getElementById("projectName").value;
    uniqueProjectId = projectId;
    userId = sessionStorage.getItem("usernameId");

    userData = {'projectName': projectTitle}
    
    makeRequest('POST', BASE_URL + '/ProjectAPI/api/project/create/' + userId, userData)
    .then((value) => {

        console.log("successfully registered");
        console.log(value);
    }).catch((error) => {
        console.warn(error);
    });

    if (projectTitle === "") {
        return;
    }

    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'list-group-item list-group-item-action bg-light">Dashboard2</a>');
    projectDiv.addEventListener('click', (ev) => {
        var myNode = document.getElementById("form1");
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);

    }
         printSavedProject(projectIdDiv.innerText, ev.target);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.id="deleteButton";
    deleteBtn.innerText="delete";
    deleteBtn.addEventListener('click', (ev) => {
    deleteTask(ev.target)
    ev.stopPropagation();
    });
    const projectIdDiv = document.createElement('div');
    projectIdDiv.style.display="none";
    projectIdDiv.innerText=uniqueProjectId;

    projectDiv.append(projectTitle);
    projectDiv.append(deleteBtn);
    projectDiv.append(projectIdDiv);
    sidebarId.append(projectDiv)

    document.getElementById('projectName').value = ''

    const dataString = JSON.stringify(form1);
    sessionStorage.setItem('userData', dataString);

    var myNode = document.getElementById("form1");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);

    }
    projectId++
    userData = [];
}

function deleteProject(){
     
}


function addProject() {
    
    f = document.getElementById("form1");
    sidebar = document.getElementById("sidebar-wrapper");
    title = document.getElementById("projectName").value;
    if (title === "") {
        return;
    }
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.id = "deleteButton";
    deleteBtn.innerText = "delete";
    deleteBtn.addEventListener('click', (ev) => {
        deleteTask(ev.target)
    });

    const taskDiv = document.createElement('div');
    taskDiv.append(title);
    taskDiv.append(deleteBtn);
    sidebar.append(taskDiv);
    document.getElementById('projectName').value = ''

    // let userData = {};

    //     for (let element of form1.elements) {

    //         userData[element.k] = element.value;
    //         console.log(k);
    //         console.log(element.value);
    //         k++

    const dataString = JSON.stringify(form1);
    sessionStorage.setItem('userData', dataString);
    // }


    var myNode = document.getElementById("form1");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    

    //addProject() calls the API to add a project to table
}

function printProject(method, url, username) {

}

function deleteTask(button) {
    var taskDiv = button.parentNode;
    taskDiv.parentNode.removeChild(taskDiv);
}



function saveTasks() {

    for (let task in userData) {
        // console.log(userData[task]);
        // console.log(projectId);
        makeRequest('POST', BASE_URL + '/ProjectAPI/api/task/create/' + projectId, userData[task])
            .then((value) => {

                console.log("successfully registered");
                console.log(value);
            }).catch((error) => {
                console.warn(error);
            });
    }
}

function addTask() {
    let completeStatus= false;
    let f = document.getElementById("form1");
    let member = document.getElementById("task1").value;
    if (member.length == 0) {
        return;
    }
    const childPara = document.createElement('p');
    childPara.setAttribute("class", "deleteMe");
    childPara.setAttribute("id", m);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("class", "deleteMe");

    m++
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('click', (ev) => {
        if (ev.target.checked) {
            ev.target.parentElement.style.textDecoration = "line-through";
            v++
            completeStatus= true;
            task = {"taskContent": member, "checked": completeStatus};
            console.log(task);
        } else {
            ev.target.parentElement.style.textDecoration = "none";
            v--
            completeStatus= false;
            task = {"taskContent": member, "checked": completeStatus};
            console.log(task);
        }
        progressBar()
    });

    childPara.innerText = member;
    childPara.append(checkBox);
    f.appendChild(childPara);
    document.getElementById('task1').value = ''
    progressBar();

    task = {"taskContent": member, "checked": completeStatus};
    userData.push(task);
}

