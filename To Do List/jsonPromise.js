const req = new XMLHttpRequest();
req.onload = function () { 
    const data = JSON.parse(req.responseText);
    console.log('It worked!', movieID);
    console.log(data);
    createPage(data);
};

req.open('GET', 'https://us-central1-qac-sandbox.cloudfunctions.net/deleteUser​');
req.send();

//initiaizes the JSON promise 

function makeRequest(method, url, userData) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 299) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject('Error!: ' + xhr.responseText);
            }
        }

        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json'); 
        if (method === 'POST'){
        xhr.send(JSON.stringify(userData));
        
    }else{xhr.send();
    }
});
}

// Example call
// makeRequest('DELETE', 'https://us-central1-qac-sandbox.cloudfunctions.net/deleteUser?username=ian​')
//     .then((value) => {
//         console.log(value);
//     }).catch((error) => {
//         console.warn(error);
//     });


// function makeRequest(method, url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.onload = () => {
//             if (xhr.status >= 200 && xhr.status <= 299) {
//                 resolve(JSON.parse(xhr.responseText));
//             } else {
//                 reject('Error!: ' + xhr.responseText);
//             }
//         };
//         xhr.open(method, url);
//         xhr.setRequestHeader('Content-Type', 'application/json');
//         xhr.send();
//     });
// }

// // Example call
// makeRequest('GET', 'http://somewhere.not/here')
//     .then((value) => {
//         console.log(value);
//     }).catch((error) => {
//         console.warn(error);
//     })