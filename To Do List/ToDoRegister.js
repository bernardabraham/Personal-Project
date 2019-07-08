//1)gets id or username from session storage
//appends a child div onto the parent for
//each user element (username, pass, first/last name)
//2)uses the delete method when you click
//the button to remove user from database by sending username 
//then returns you to login window
//3)uses the same method as the register method to update user


//1)creates a div box in the middle
// 2) uses input JSON method to add a new user to database
// 3) enter details, enter key should be usable too
// 4) link to login page



function displayUser(method, url, username) {
    const data = sessionStorage.getItem("userData");

    makeRequest('GET', 'https://us-central1-qac-sandbox.cloudfunctions.net/getUser')
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
function deleteUser(method, url) {

    //set username to equal the value of the element
    const username = document.getElementById("username") 
    makeRequest('DELETE', 'https://us-central1-qac-sandbox.cloudfunctions.net/deleteUser?username='+ username)
        .then((value) => {
            console.log(value);
        }).catch((error) => {
            console.warn(error);
        });   
        window.location = 'login.html'; //return to login page 
    }
    
    //3)updates user and sends to login page    
    function updateUser(method, url, username, password) {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    //set username to equal the value of the element
        makeRequest('POST', 'https://us-central1-qac-sandbox.cloudfunctions.net/setUser?username='+username+'&password='+password)
        .then((value) => {
            console.log(value);
        }).catch((error) => {
            console.warn(error);
        });
        console.log(input);
    
        window.location = 'login.html';
    
        return false;
    }

    //back button
    function goBack(method, url) {
    window.location = 'login.html';
    }