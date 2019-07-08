//1)sets the element = value you typed in
//converts the element to JSON
//Uses post method to send it to database
//sends you back to login page

//registers a user and sends them to login page


function registerUser(method, url) {

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;

const userData = {'username': username, 'password': password, 'firstName' :firstName, 'lastName':lastName}
// userData[element.username] = element.value;
// userData[element.id] = element.value;   

makeRequest('POST', 'https://us-central1-qac-sandbox.cloudfunctions.net/setUser', userData)
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



