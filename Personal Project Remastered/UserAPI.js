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

function testsave() {
    

var myNode = document.getElementById("form1");
const dataString = JSON.stringify(form1);
console.log(form1)
console.log(dataString);

// while (myNode.firstChild) {
// myNode.appendChild(myNode.firstChild)

    // const newcontent = {'taskContent' : content};
    // const checked = true;
    // const userData = { 'checked': checked, 'taskContent': content }

    makeRequest('POST', 'http://localhost:8080/ProjectAPI/api/task/create', userData)
        .then((value) => {

            console.log("successfully registered");
            console.log(value);
        }).catch((error) => {
            console.warn(error);
        });

}

function testprint() {
    content = 'hey';
    makeRequest('GET', 'http://localhost:8080/ProjectAPI/api/task/getAll')
        .then((value) => {
            f = document.getElementById("form1");
            for (let i = 1; i <= value.length; i++) {
                
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
    const email = document.getElementById("email").value;

    const userData = { 'username': username, 'password': password, 'email': email }
    console.log(userData);
    // userData[element.username] = element.value;
    // userData[element.id] = element.value;   

    makeRequest('POST', 'http://localhost:8080/ProjectAPI/api/account/create', userData)
        .then((value) => {
            // const dataString = JSON.stringify(userData);
            // sessionStorage.setItem('userData', dataString);
            console.log("successfully registered");
            console.log(value);
        }).catch((error) => {
            console.warn(error);
        });
}


function login(username, password) {
if (document.getElementById("username") === null || document.getElementById("password") === null){
    div = document.getElementById("register1");
    div.append("Please input correct details");
    return ;
}

    div = document.getElementById("register1");
    div.append("Please input correct details");

    const username1 = document.getElementById("username").value
    const password1 = document.getElementById("password").value
    console.log(username1)

    makeRequest('GET', 'http://localhost:8080/ProjectAPI/api/account/get/' + username1)
        .then((value) => {
            console.log(value);
            console.log(value.password)
            if (value.password === password1) {
                console.log("success");
                sessionStorage.setItem('userData', username1);
                window.location = '../Main.html'
            } else {
                console.log("fail");


            }

        }).catch((error) => {
            console.warn(error);
            div = document.getElementById("register1");
            div.append("Please input correct details");
        });
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
