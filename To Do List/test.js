//1)Text input box. When you press enter it creates a new blank task
//list that has a header of what you entered, also it adds the task to the
//sidebar
//2) Task list div 
//3 Objective Input Box. each time you press enter it appends a text box
//underneath with a tick box and difficult level next to it
//4) Tick Box. When you click it it puts a line through the task to mark
//it as done
//5) Task Sidebar. It saves the information from previous tasks in a database
//when you click it it populates the task 1 div. It has a scroll wheel to go through
//tasks
//6) Search. Searches the headers and maybe descriptions for words matching the search
//clears the side panel then populates it with only the matching searches
//7) Progress bar total progress point divided by the completed progress points. Creates
//a bar that fills up depending on the percentage.
//8) potentially a drop down menu were you choose a difficult 1-5 
//9) a link to the account settings page
//10) a link to the register page

function taskInput1() {
/*on submit prepends a line of text above the input box with
a check box next to it and moves the input element down 
*/
member = "hi";
member = document.getElementById("task1").value;
const childDiv = document.createElement('div2');
childDiv.innerText = member + "\n";
parent1.append(childDiv);
document.getElementById('task1').value = ''
console.log(member);
//para2.appendChild(member);
//document.getElementById("parent1").appendChild(member);
//parent1.innerText = member;

}
function runScript(e){
    if (e.keyCode == 13) {
        var tb = document.getElementById("task1");
        document.getElementById("submit1").click();
        return false;
    }
}
// function saveTask{
    /* on submit it saves the form to a new variable1
    whos name increases by 1 each time  
*/
// }
// function requestTask{
// }

function taskList2(method, url, username) {
}
function objectiveList3(method, url, username) {
}
function tickBox4(method, url, username) {
}
function taskSidebar5(method, url, username) {
}
function panelSearch6(method, url, username) {
}
function progressBar7(method, url, username) {
}
function difficultySelect8(method, url, username) {
}
function accountSettings9(method, url, username) {
    window.location = 'ToDoLogin.html'; 
}
function registerPage10(method, url, username) {
    window.location = 'ToDoRegister.html'; 
}

// adds a class to the text that has a strikethrough
function strikeThrough(){
    
    document.getElementById("text1").className = "strikeThrough"

}



// function progressBar{

//     v = parseInt(document.getElementById("progress").value);
//     m = parseInt(document.getElementById("progress").value);
//     progress = (v/v+m)*100
//     document.getElementById("progressBar").value
// }