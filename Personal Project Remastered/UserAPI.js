function addProjectToAPI(method, url) {
    let projectData = {};

    var myNode = document.getElementById("form1");
    console.log(myNode)

    while (myNode.firstChild) {

        //add the node to userdata
        value = myNode.removeChild(myNode.firstChild);
        projectData.keyi = value;

    }

    // userData[element.username] = element.value;
    // userData[element.id] = element.value;   

    makeRequest('POST', 'http://localhost:8080/ProjectAPI/api/account/addProject', userData)
        .then((value) => {
            // const dataString = JSON.stringify(userData);
            // sessionStorage.setItem('userData', dataString);
            console.log("successfully registered");
            window.location = 'Login.html'
            console.log(value);
        }).catch((error) => {
            console.warn(error);
        });

}

function printProjects(){
    // userId = sessionStorage.getItem("usernameId");
    const userId= 1;
    console.log("hi");

    makeRequest('GET', 'http://localhost:8080/ProjectAPI/api/project/get/' + userId)
    .then((value) => {

          for(i = 0; value.length; i++){
        
        projectId = value[i].projectId;
        projectTitle = value[i].projectName;
        sidebarId = document.getElementById("sidebarId");

        const projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'list-group-item list-group-item-action bg-light">Dashboard2</a>');
        const projectIdDiv = document.createElement('div');
        projectIdDiv.setAttribute('id', 'projectIdDiv');

        

        
        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.id="deleteButton";
        deleteBtn.innerText="delete";
        deleteBtn.addEventListener('click', (ev) => {
        deleteTask(ev.target)
        });
      
    
    projectDiv.addEventListener('click', (ev) => {
        testprint(projectId, ev.target)
    });

        projectDiv.append(projectTitle);
        projectDiv.append(projectIdDiv);
        projectDiv.append(deleteBtn);
        sidebarId.append(projectDiv)
        projectId++
    
 }
});
    
    
}


    //for each item in project make a sidebar element with name and id
    //then set id to none in css


function testprint(projectId) {

    makeRequest('GET', 'http://localhost:8080/ProjectAPI/api/task/get/' + projectId)
        .then((value) => {
            console.log(value);
            f = document.getElementById("form1");
            for (let i = 0; i <= value.length; i++) {

                member = value[i].taskContent;

                const childPara = document.createElement('p');
                childPara.setAttribute("class", "deleteMe");
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
                if (value[i].checked === true) {
                    v++
                    childPara.style.textDecoration = "line-through";
                }
                checkBox.checked = value[i].checked;

                childPara.innerText = member;
                childPara.append(checkBox);
                f.appendChild(childPara);
                document.getElementById('task1').value = ''
                progressBar();


            }
        }).catch((error) => {
            console.warn(error);
        });
}



function registerUser(method, url) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const email = document.getElementById("email").value;

    console.log(password);
    console.log(password2);
if (password === password2)
    if (password === password2){
    const userData = { 'username': username, 'password': password, 'email': email }
    console.log(userData);
    // userData[element.username] = element.value;
    // userData[element.id] = element.value;   

    makeRequest('POST', 'http://localhost:8080/ProjectAPI/api/account/create', userData)
        .then((value) => {
            // const dataString = JSON.stringify(userData);
            // sessionStorage.setItem('userData', dataString);
            window.location = 'Login.html';
            console.log("successfully registered");
            console.log(value);
        }).catch((error) => {
            console.warn(error);
            div = document.getElementById("register1");
            div.style.display="block";
        });
    }
    else{
        div = document.getElementById("register1");
        div.style.display="block";
    }
    return false;
}


function login() {
    if (document.getElementById("username").value === "" || document.getElementById("password").value === "") {
        div = document.getElementById("register1");
        div.style.display="block";
        return;
    }
    const username1 = document.getElementById("username").value
    const password1 = document.getElementById("password").value
    

    makeRequest('GET', 'http://localhost:8080/ProjectAPI/api/account/get/' + username1)
        .then((value) => {
            console.log(value);
            console.log(value.password)
            if (value.password === password1) {
                sessionStorage.setItem('usernameId', value.userId);
                window.location = '../Main.html'
                
            } else {
                console.log("fail");


            }

        }).catch((error) => {
            div = document.getElementById("register1");
            div.style.display="block";
            console.warn(error);
            console.log("hi");
            
        });
        return false;
}

function displayUser(method, url, username, userId) {
    const data = sessionStorage.getItem("userData");

    makeRequest('GET', 'http://localhost:8080/ProjectAPI/api/account/get/' + UserId)
        .then((value) => {
            for (key in value) {
                if (username == key) {
                    document.getElementById("username").value = key;
                    document.getElementById("password").value = key.password;
                    document.getElementById("firstName").value = key.firstName;
                    document.getElementById("lastName").value = key.lastName;
                    break;
                }
            }
            console.log(value);
        }).catch((error) => {
            console.warn(error);
        });
    console.log(value);

}

function deleteUser(method, url) {

    const username = document.getElementById("username")

    makeRequest('DELETE', 'http://localhost:8080/ProjectAPI/api/account/delete/' + userId)
        .then((value) => {
            console.log(value);
            // value.userId;
        }
        ).catch((error) => {
            console.warn(error);
        });


    makeRequest('DELETE', 'http://localhost:8080/ProjectAPI/api/account/delete/' + value.userId)
        .then((value) => {
            console.log(value);
        }).catch((error) => {
            console.warn(error);
        });
}



function updateUser(method, url, UserId) {
    // const username = document.getElementById("username")
    // const password = document.getElementById("password")

    makeRequest('POST', 'http://localhost:8080/ProjectAPI/api/account/update/' + UserId + +username + '&password=' + password)
        .then((value) => {
            console.log(value);
        }).catch((error) => {
            console.warn(error);
        });
    console.log(input);

    // window.location = 'login.html';

    return;
}
