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
    
    makeRequest('POST', 'localhost:8080/ProjectAPI/api/account/addProject', projectData)
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
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;

const userData = {'username': username, 'password': password, 'firstName' :firstName, 'lastName':lastName}
// userData[element.username] = element.value;
// userData[element.id] = element.value;   

makeRequest('POST', 'localhost:8080/ProjectAPI/api/account/create', userData)
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

function login(username, password) {

// const username = document.getElementById("username")
// const password = document.getElementById("password")
 

makeRequest('GET', 'localhost:8080/ProjectAPI/api/account/getUser/')
    .then((value) => {
        console.log(value);
        if(value.password===password){

        sessionStorage.setItem('userData', username);
        window.location = 'UserDetails.html'
    }

    }).catch((error) => {
        console.warn(error);
        
    });
}

function displayUser(method, url, username, userId) {
    const data = sessionStorage.getItem("userData");

    makeRequest('GET', ' localhost:8080/ProjectAPI/api/account/get/' + UserId)
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
    console.log(value); //prints out details
  
}

//2)deletes user, returns to login page
function deleteUser(method, url, UserId) {

//set username to equal the value of the element
const username = document.getElementById("username") 
makeRequest('DELETE', 'localhost:8080/ProjectAPI/api/account/delete/'+ UserId)
    .then((value) => {
        console.log(value);
    }).catch((error) => {
        console.warn(error);
    });   
    window.location = 'login.html'; //return to login page 
}

//3)updates user and sends to login page    
function updateUser(method, url, UserId) {
const username = document.getElementById("username")
const password = document.getElementById("password")
//set username to equal the value of the element
    makeRequest('POST', 'localhost:8080/ProjectAPI/api/account/update/' + UserId + +username+'&password='+password)
    .then((value) => {
        console.log(value);
    }).catch((error) => {
        console.warn(error);
    });
    console.log(input);

    window.location = 'login.html';

    return false;
}