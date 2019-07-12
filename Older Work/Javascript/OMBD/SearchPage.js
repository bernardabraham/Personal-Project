function getMovies() {
    const req = new XMLHttpRequest();

    req.onload = function () { //its anonymous so doesn't need a name
        const data = JSON.parse(req.responseText);
        console.log('It worked!', data);
        createTitles(data);
    };

    req.open('GET', 'http://www.omdbapi.com/?s=' + document.getElementById("search").value + '&apikey=543094ec');
    req.send();
}

const a='http://www.omdbapi.com/?s=' + document.getElementById("search").value + '&apikey=543094ec'

//**print out the matching movies on the current page
function createTitles(data) {

    //enter search word 
    //update url with new search word and add it to onload function    
    const movieDetailsEl = document.getElementById('movieDetails');
    para2.innerText = "";
    
    for (let member of data.Search) {
        console.log(member);
        const para2 = document.createElement('p');
        para2.innerText = member.Title;
        const nextButton = document.createElement("BUTTON")
        nextButton.innerText= "Go to movie"
        nextButton.addEventListener("click", (e) => {
        searchSubmit(member.imdbID);
        });
        movieDetailsEl.appendChild(para2);
        movieDetailsEl.appendChild(nextButton);
    }
}

//**on click, store the url as a JSON string in a form and go to next page
let userData = {};
function searchSubmit(search) {
    console.log(search);
    sessionStorage.setItem('movieID', search);
    window.location = 'InfoPage.html';
}

     
// }
    // for (let element of search.elements) {
    //     userData[element.id] = element.value;
    //     console.log("successfully submited");
    // }
    // const dataString = JSON.stringify(userData);
    // sessionStorage.setItem('userData', dataString);
    // window.location = 'InfoPage.html';
    // return false;
