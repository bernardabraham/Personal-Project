
function printProjects() { //on page startup
    userId = sessionStorage.getItem("usernameId");

    makeRequest('GET', BASE_URL + '/ProjectAPI/api/project/get/' + userId)
        .then((value) => {

            for (i = 0; i <= value.length - 1; i++) {
                sidebarId = document.getElementById("sidebarId");
                

                // createProjectDiv()
                projectId = value[i].projectId;
                projectTitle = value[i].projectName;


                const titleDiv = document.createElement('div');
                titleDiv.className = "searchThis";
                titleDiv.innerText = projectTitle;




                const projectDiv = document.createElement('div');
                projectDiv.setAttribute('class', 'list-group-item list-group-item-action bg-light">Dashboard2</a>');

                const projectIdDiv = document.createElement('div');
                projectIdDiv.style.display = "none";
                projectIdDiv.innerText = projectId;


                const deleteBtn = document.createElement("button");
                deleteBtn.setAttribute('type', 'button');
                deleteBtn.id = "deleteButton";
                deleteBtn.innerText = "delete";
                deleteBtn.addEventListener('click', (ev) => {
                    deleteTask(ev.target)
                    ev.stopPropagation();
                });


                projectDiv.addEventListener('click', (ev) => {
                    var myNode = document.getElementById("form1");
                    while (myNode.firstChild) {
                        myNode.removeChild(myNode.firstChild);

                    }
                    printSavedProject(projectIdDiv.innerText, ev.target)
            
                });

                projectDiv.append(titleDiv);
                projectDiv.append(projectIdDiv);
                projectDiv.append(deleteBtn);
                sidebarId.append(projectDiv)

            }
        });


}


function printSavedProject(projectId) { //on click

//project id is the same as the div 

    makeRequest('GET', BASE_URL + '/ProjectAPI/api/task/get/' + projectId)
        .then((value) => {

            f = document.getElementById("form1");
            for (let i = 0; i <= value.length; i++) {
                console.log(value[i].taskContent);
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



function registerUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const email = document.getElementById("email").value;

    console.log(password);
    console.log(password2);
    if (password === password2)
        if (password === password2) {
            const userData = { 'username': username, 'password': password, 'email': email }
            console.log(userData);


            makeRequest('POST', BASE_URL + '/ProjectAPI/api/account/create', userData)
                .then((value) => {
                    window.location = 'Login.html';
                    console.log("successfully registered");
                    console.log(value);
                }).catch((error) => {
                    console.warn(error);
                    div = document.getElementById("register1");
                    div.style.display = "block";
                });
        }
        else {
            div = document.getElementById("register1");
            div.style.display = "block";
        }
    return false;
}


function login() {
    if (document.getElementById("username").value === "" || document.getElementById("password").value === "") {
        div = document.getElementById("register1");
        div.style.display = "block";
        return;
    }
    const username1 = document.getElementById("username").value
    const password1 = document.getElementById("password").value


    makeRequest('GET', BASE_URL + '/ProjectAPI/api/account/get/' + username1)
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
            div.style.display = "block";
            console.warn(error);
            console.log("hi");

        });
    return false;
}


function deleteUser() {

    userId = sessionStorage.getItem("usernameId");
    console.log(userId);

    makeRequest('DELETE', BASE_URL + '/ProjectAPI/api/account/delete/' + userId)
        .then((value) => {
            console.log(value);
            // value.userId;
        }
        ).catch((error) => {
            console.warn(error);
        });

}


function updateUser() {
    userId = sessionStorage.getItem("usernameId");
    div = document.getElementById("updated");
    div.style.display = "block";

    const username1 = document.getElementById("username").value;
    const password1 = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const email1 = document.getElementById("email").value;
    if (username1 === "" || password1 === "" || password2 === "" || email1 === "") {
        div = document.getElementById("updated");
        div.style.display = "block";
        return false;
    }

    if (password1 != password2) {
        div = document.getElementById("updated");
        div.style.display = "block";
        return false;
    }
    userData = { 'username': username1, 'password': password1, 'email': email1 }

    makeRequest('POST', BASE_URL + '/ProjectAPI/api/account/update/' + userId, userData)
        .then((value) => {
            console.log(value);

            div.append.innerHTML += 'successfully updated';

        }).catch((error) => {
            console.warn(error);
            div = document.getElementById("updated");
            div.style.display = "block";
        });

    return false;

}
