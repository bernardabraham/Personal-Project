
let v = 0;
let m = 0;
let i = 0;
var k=0;
// let userData = {};

function panelSearch() {
    search = document.getElementById("searchbar").value;
    if (search===""){
        return;
    }
    console.log("hi");
// for (i=0; i<10; i++){
//     if (search === title){
//}
    //else return;
}

function appendProject() {
    f=document.getElementById("form1");
sidebarId=document.getElementById("sidebar-wrapper");
projectTitle = document.getElementById("projectName").value;
if (projectTitle===""){
    return;
}
const deleteBtn = document.createElement("button");
deleteBtn.setAttribute('type', 'button');
deleteBtn.id="deleteButton";
deleteBtn.innerText="delete";
deleteBtn.addEventListener('click', (ev) => {
deleteTask(ev.target)
});

const projectDiv = document.createElement('div');
projectDiv.setAttribute('class', 'list-group-item list-group-item-action bg-light">Dashboard2</a>');
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
}


// project.setAttribute(<a href="#");
function addProject() {

f=document.getElementById("form1");
sidebar=document.getElementById("sidebar-wrapper");
title = document.getElementById("projectName").value;
if (title===""){
    return;
}
const deleteBtn = document.createElement("button");
deleteBtn.setAttribute('type', 'button');
deleteBtn.id="deleteButton";
deleteBtn.innerText="delete";
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

function deleteTask(button){
var taskDiv = button.parentNode;
taskDiv.parentNode.removeChild(taskDiv);
}

function addTask() {
    f=document.getElementById("form1");
    member = "";
    member = document.getElementById("task1").value;
    if (member===""){
        return;
    }
    const childPara = document.createElement('p');
    childPara.setAttribute("class", "deleteMe");
    

    //  childPara.id(i);
    //  i++;

    const checkBox = document.createElement("input");
     checkBox.setAttribute("class", "deleteMe");
    

    m++
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('click', (ev) => {
        if (ev.target.checked) {
            ev.target.parentElement.style.textDecoration = "line-through";
            v++
        } else {
            ev.target.parentElement.style.textDecoration = "none";
            v--
        }
        progressBar()
    });
    
    childPara.innerText = member;
    childPara.append(checkBox);
    //parent1.append(childPara);
    f.appendChild(childPara);
    document.getElementById('task1').value = ''
    progressBar();
}


