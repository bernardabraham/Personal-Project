//5) Task Sidebar. It saves the information from previous tasks in a database
//when you click it it populates the task 1 div. It has a scroll wheel to go through
//tasks
//6) Search. Searches the headers and maybe descriptions for words matching the search
//clears the side panel then populates it with only the matching searches

let v = 0;
let m = 0;

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

let userData = {};
function taskAdd() {
    
//add the task name to the sidebar as a link
//take the form and add it to session storage
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
// const form1 = document.createElement("input");
// form1.setAttribute('type', 'form');
// for (let element of form1.elements) {
//     userData[element.id] = element.value;
//     console.log("successfully submited");
// }
//     const dataString = JSON.stringify(userData);
//     sessionStorage.setItem('userData', dataString);

//     console.log("hi");
//     for (let element of form.elements) {
//         if (element.id == "buttonId"){
//             break;
//         } 
//         userData[element.id] = element.value;
//         console.log("successfully submited");
//     }
//         const dataString = JSON.stringify(userData);
//         sessionStorage.setItem('userData', dataString);
//     return false;
}

function taskGet(method, url, username) {
    
    }

function deleteTask(button){
var taskDiv = button.parentNode;
taskDiv.parentNode.removeChild(taskDiv);
}

function taskInput1() {
    member = "hi";
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

function progressBar() {
    let progress = (v / m) * 100;
    document.getElementById("progressBar").value = progress;
    progressInt = parseInt(progress)
    document.getElementById("progress1").innerText = progressInt + "%";
}

function runScript(e) {
    if (e.keyCode == 13) {
        document.getElementById("submit1").click();
        return false;
    }
}

function runScript2(e) {
    if (e.keyCode == 13) {  
        document.getElementById("submit2").click();
        return false;
    }
}

function runScript3(e) {
    if (e.keyCode == 13) {
        document.getElementById("submit3").click();
        return false;
    }
}

function strikeThrough() {

    var ele = document.getElementByClassName("task1");
    ele.style.setProperty("text-decoration", "line-through");

}

function accountSettings9(method, url, username) {
    window.location = 'ToDoLogin.html';
}
function registerPage10(method, url, username) {
    window.location = 'ToDoRegister.html';
}