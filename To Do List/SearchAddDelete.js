//5) Task Sidebar. It saves the information from previous tasks in a database
//when you click it it populates the task 1 div. It has a scroll wheel to go through
//tasks
//6) Search. Searches the headers and maybe descriptions for words matching the search
//clears the side panel then populates it with only the matching searches

let v = 0;
let m = 0;
let userData = {};

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


function addProject() {
//add the project to the sidebar as a link
title = document.getElementById("taskName").value;
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
document.getElementById('taskName').value = ''
//addProject() calls the API to add a project to table
}

function printProject(method, url, username) {
    
    }

function deleteTask(button){
var taskDiv = button.parentNode;
taskDiv.parentNode.removeChild(taskDiv);
}

function addTask() {
    member = "";
    member = document.getElementById("task1").value;
    if (member===""){
        return;
    }
    const childPara = document.createElement('p');
    const checkBox = document.createElement("input");
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
    parent1.append(childPara);
    document.getElementById('task1').value = ''
    progressBar();
}

