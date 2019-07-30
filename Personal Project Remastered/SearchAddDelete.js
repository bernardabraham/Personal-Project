
let v = 0;
let m = 0;
let i = 0;
var k = 0;
let projectId = 1;
let userData = [];


function panelSearch() {
    search = document.getElementById("searchbar").value;
    if (search === "") {
        return;
    }
    var myNode = document.getElementById("sidebarId");
    var children = myNode.children;
    for (var i = 0; i < children.length; i++) {
        while (children[i].innerText != search) {
            if (children[i].innerText != search) {
                children[i].parentNode.removeChild(children[i]);
            }
        }
    }

}

function appendProject() {
    f = document.getElementById("form1");
    sidebarId = document.getElementById("sidebarId");
    projectTitle = document.getElementById("projectName").value;

    userId = sessionStorage.getItem("usernameId");
    console.log(userId);

    userData = {'projectName': projectTitle}
    makeRequest('POST', 'http://localhost:8080/ProjectAPI/api/project/create/' + userId, userData)
    .then((value) => {

        console.log("successfully registered");
        console.log(value);
    }).catch((error) => {
        console.warn(error);
    });

    
console.log(projectId);
    
    if (projectTitle === "") {
        return;
    }

    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'list-group-item list-group-item-action bg-light">Dashboard2</a>');
    projectDiv.addEventListener('click', (ev) => {
        testprint(ev.target)
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.id="deleteButton";
    deleteBtn.innerText="delete";
    deleteBtn.addEventListener('click', (ev) => {
    deleteTask(ev.target)
    });
    projectDiv.append(projectTitle);
    projectDiv.append(deleteBtn);
    sidebarId.append(projectDiv)

    document.getElementById('projectName').value = ''

    const dataString = JSON.stringify(form1);
    sessionStorage.setItem('userData', dataString);
    // }


    var myNode = document.getElementById("form1");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);

    }
    projectId++
    console.log("project id" + projectId);
    userData = [];
}


function deleteProject(){
     
}

// project.setAttribute(<a href="#");
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



function testsave() {

    for (let task in userData) {
        // console.log(userData[task]);
        // console.log(projectId);
        makeRequest('POST', 'http://localhost:8080/ProjectAPI/api/task/create/' + projectId, userData[task])
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
    console.log(task);
    userData.push(task);
    console.log(userData);
}

