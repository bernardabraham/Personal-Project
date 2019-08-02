
let v = 0; //progress bar
let m = 0; //progress bar
let i = 0;
var k = 0;
let projectIdTasks = 1;
let userData1 = [];
const BASE_URL = 'http://35.246.10.215:8081';
// const BASE_URL = 'http://localhost:8080';


function id1() {
console.log(projectIdTasks);

}

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


function appendProject() {

    projectIdTasks = getHighestProjectId()
    f = document.getElementById("form1");
    sidebarId = document.getElementById("sidebarId");
    projectTitle = document.getElementById("projectName").value;
    
    if (projectTitle === "") {
        return;
    }

    userId = sessionStorage.getItem("usernameId");
    userData = { 'projectName': projectTitle }
    makeRequest('POST', BASE_URL + '/ProjectAPI/api/project/create/' + userId, userData) //addprojecttoAPI
        .then((value) => {

            console.log("successfully registered");
            console.log(value);
        }).catch((error) => {
            console.warn(error);
        });

    createProjectDiv()
    console.log("this is" + projectIdTasks);
    saveTasks();

    document.getElementById('projectName').value = ''

    const dataString = JSON.stringify(form1);
    sessionStorage.setItem('userData', dataString);

    var myNode = document.getElementById("form1");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);

    }

    userData1 = [];

}


function deleteTask(button) {
    var taskDiv = button.parentNode;
    taskDiv.parentNode.removeChild(taskDiv);
}

function createProjectDiv() {
    
    f = document.getElementById("form1");
    sidebarId = document.getElementById("sidebarId");
    projectTitle = document.getElementById("projectName").value;

    userId = sessionStorage.getItem("usernameId");

    userData = { 'projectName': projectTitle }


    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'list-group-item list-group-item-action bg-light">Dashboard2</a>');
    projectDiv.addEventListener('click', (ev) => {
        var myNode = document.getElementById("form1");
        printSavedProject(projectIdDiv.innerText, ev.target);
        
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.id = "deleteButton";
    deleteBtn.innerText = "delete";
    deleteBtn.addEventListener('click', (ev) => {
        deleteTask(ev.target)
        ev.stopPropagation();
    });


    const projectIdDiv = document.createElement('div2');
    userId = sessionStorage.getItem("usernameId");
    makeRequest('GET', BASE_URL + '/ProjectAPI/api/project/getMax/' + userId)
        .then((value) => {
            projectIdDiv.innerText = value;
            projectIdDiv.style.display = "none";
            projectIdTasks = value ;

            const titleDiv = document.createElement('div');
            titleDiv.className = "searchThis";
            titleDiv.innerText = projectTitle;
    
            projectDiv.append(titleDiv);
        
            projectDiv.append(projectIdDiv);
            projectDiv.append(deleteBtn);
            sidebarId.append(projectDiv);

            document.getElementById('projectName').value = '';
        }).catch((error) => {
            console.warn(error);
            console.log("hi");
        });
        

        
}


function addTask() { //when you make a task initially
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

    childPara.innerText =  member;
    childPara.append (checkBox);  
    f.appendChild(childPara);
    document.getElementById('task1').value = '' 
    progressBar();
    task = {"taskContent":  member, "checked": completeStatus};
    userData1.push(task); 
}

function saveTasks() {
    console.log(JSON.stringify(userData1[task]));
    console.log(JSON.stringify(task));
    
    for (let task of userData1) {
        console.log(JSON.stringify(task));
        makeRequest('POST', BASE_URL + '/ProjectAPI/api/task/create/' + projectIdTasks, task)
            .then((value) => {
                console.log(JSON.stringify(task));
                

            }).catch((error) => {
                console.log(error);
            });
    }
}

function getHighestProjectId() {
    userId = sessionStorage.getItem("usernameId");
    makeRequest('GET', BASE_URL + '/ProjectAPI/api/project/getMax/' + userId)
        .then((value) => {
            projectIdTasks = value;
            return value + 1;
        }).catch((error) => {
            console.warn(error);
            console.log("hi");
        });

}

// function updateProgressBar(){   
// p = form.length;
// z= 0;
// for(elements of taskList){
//     if (element.checked = true){
//     v++
//     }
// }
//     let p rogress = (z / p) * 100;  
//     document.getElementById("progressBar").value = progress;
 //   ogressInt = parseInt(progress) 
//     document.getElementById("progress1").innerText = progressInt + "%";
     
// }

