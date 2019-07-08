

//1)uses the GET method and if its true sends by calling
//stores login id or username in session storage

//2)take you to register page

//Gets inputed user info from database, takes you to
//register page if true is returned

function login(username, password) {

const username = document.getElementById("username")
const password = document.getElementById("password")
 

makeRequest('GET', 'https://us-central1-qac-sandbox.cloudfunctions.net/setUser?username='+ username +'&password='+ password)
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
    

    //const dataString = JSON.stringify(user);



function goToRegister() {
    window.location = 'Register.html';
}

