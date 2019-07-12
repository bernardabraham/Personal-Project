

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
req.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
req.send();

function createPage(data) {

    const squadDetailsEl = document.getElementById('movieDetails');

    for (let key in data) {
        console.log('key', key);
        
        if (key === 'members'){
            break
    }
        const para = document.createElement('p');
        para.innerText = key + ' ' + data[key];
        squadDetailsEl.appendChild(para);
      
    }

for (let member of data.members){
    const div1 = document.createElement('div');
    for(let element in member){
    const para2 = document.createElement('p');
        para2.innerText = element + ' : ' + member[element];
       div1.appendChild(para2); //squadDetailsEl.appendChild(para2);
    }
     squadDetailsEl.appendChild(div1);
}    

        
//const x = () => "hello" execute a function and immediately print out hello
//const x = (a,b) => a + b

//b.addEvent('click');
//(a) => {console.log(a);}
//append.b

//const {name, location} = account;

// const {squadName, members, ...everythingElse} = data; shortens data.members to members, 
//use everythingElse to exclude the first two
 // const[a] = people; targets first const[a,c] targets first and third       
 // ...rest the three dots are a spread operator
 
 //const merged = [a, ...rest] the ... avoids a nested array

        // const member = data.members[memberIndex]
        // const divElement = document.createElement("div");
        // const firstElement = document.createElement("p");
        // firstElement.innerText = part
        // console.log(part.data);
        // document.getElementById('heroDiv').append(userElement);

}



// const parent = document.getElementById();

// const wrapperEl = document.createElement

// const hEl = document.createElement('h1'); 

// const pEl = document.createElement('body');

// hEl.append();