
const movieID = sessionStorage.getItem("movieID");
//const unameObj = JSON.parse(data);
//const search = 'movieID'

const req = new XMLHttpRequest();
req.onload = function () { //its anonymous so doesn't need a name
    const data = JSON.parse(req.responseText);
    console.log('It worked!', movieID);
    console.log(data);
    createPage(data);
};
//const a='http://www.omdbapi.com/?s=' + document.getElementById("search").value + '&apikey=543094ec'

req.open('GET', 'http://www.omdbapi.com/?i=' + movieID + '&apikey=543094ec');
req.send();
const div1 = document.createElement('div');
//List out the full details of the website with the poster
function createPage(data) {
    for (let member in data){
        if (member === 'Poster'){
const img = document.createElement('img');
img.setAttribute('src', data[member]);
div1.appendChild(img); 
}else{

        
   
    const para2 = document.createElement('p');
    para2.innerText = member + ' : ' + data[member];
     div1.appendChild(para2);
     }
    //for(let element in member){
    // const para2 = document.createElement('p');
    //     para2.innerText = element + ' : ' + member[element];
    //    div1.appendChild(para2); //movieDetailsEl.appendChild(para2);
    // }
    
     document.getElementById("movieDetails").appendChild(div1);
}   
}

//on click, go back to searchpage
function goBack(){
        window.location = 'SearchPage.html';
}
  


// function createPage(data) {
//     for (let member of data){
//     const div1 = document.createElement('div');
//     for(let element in member){
//     const para2 = document.createElement('p');
//         para2.innerText = element + ' : ' + member[element];
//        div1.appendChild(para2); //movieDetailsEl.appendChild(para2);
//     }
//      movieDetailsEl.appendChild(div1);
// }  