

// 1) creates a div in the middle 
// 2) 2 text inputs which compare to database
// 3) enters details in, enter key should be usable also
//error message should appear if login is unsuccessful
// 4) link to register page

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