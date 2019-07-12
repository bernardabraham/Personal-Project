const req = new XMLHttpRequest();

req.onload = function () { //its anonymous so doesn't need a name
    const data = JSON.parse(req.responseText);
    console.log('It worked!', data);
    createPage(data);


    // if(req.status === 200){
    //     console.log(req.responseText);
    // } else {
    //     console.log('handle error')
    // }
};
req.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=543094ec');
//req.open('GET', BASE_URL + '&s=' + title);
req.send();

function createPage(data) {

    const movieDetailsEl = document.getElementById('movieDetails');
    const para = document.createElement('p');
    for (let key in data) {
        console.log('key', key);
        
        const para = document.createElement('p');
        para.innerText = key + ' ' + data[key];
        movieDetailsEl.appendChild(para);
      
    }
}