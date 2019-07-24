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


function registerUser(method, url) {
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const email = document.getElementById("email").value;

const userData = {'username': username, 'password': password, 'email' : email}
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

const username1 = document.getElementById("username").value   
const password1 = document.getElementById("password").value
console.log(username1)

makeRequest('GET', 'http://localhost:8080/ProjectAPI/api/account/get/' + username1)
    .then((value) => {
        console.log(value);
        console.log(value.password)
        if(value.password===password1){
            console.log("success");
        sessionStorage.setItem('userData', username1);
        window.location = '../Main.html'
    } else {
        console.log("fail");
        
        
    }

    }).catch((error) => {
        console.warn(error);
        div = document.getElementById("add");
        div.append("Please input correct details");
    });
}

function displayUser(method, url, username, userId) {
    const data = sessionStorage.getItem("userData");

    makeRequest('GET', 'http://localhost:8080/ProjectAPI/api/account/get/' + UserId)
    .then((value) => {
    for(key in value){
        if (username == key){
            document.getElementById("username").value=key;
            document.getElementById("password").value=key.password;
            document.getElementById("firstName").value=key.firstName;
            document.getElementById("lastName").value=key.lastName;
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

    makeRequest('GET', 'http://localhost:8080/ProjectAPI/api/account/get')
    .then((value) => {
        console.log(value);
        value.userId
    }
    ).catch((error) => {
        console.warn(error);  
    });


makeRequest('DELETE', 'http://localhost:8080/ProjectAPI/api/account/delete/'+ value.userId)
    .then((value) => {
        console.log(value);
    }).catch((error) => {
        console.warn(error);
    });   
}


   
function updateUser(method, url, UserId) {
// const username = document.getElementById("username")
// const password = document.getElementById("password")

    makeRequest('POST', 'http://localhost:8080/ProjectAPI/api/account/update/' + UserId + +username+'&password='+password)
    .then((value) => {
        console.log(value);
    }).catch((error) => {
        console.warn(error);
    });
    console.log(input);

    // window.location = 'login.html';

    return false;
}