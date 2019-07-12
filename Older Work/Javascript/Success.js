function registerSuccess() {


    const data = sessionStorage.getItem("userData");
    const unameObj = JSON.parse(data);
    // console.log(unameObj.username);
    // document.getElementById('unameDiv').innerText = unameObj.username;

    // console.log(unameObj.password);
    // document.getElementById('passwordDiv').innerText = unameObj.password;

    // console.log(unameObj.email);
    // document.getElementById('emailDiv').innerText = unameObj.email;

    // console.log(unameObj.date);
    // document.getElementById('datediv').innerText = unameObj.date;

    // console.log(unameObj.age);
    // document.getElementById('ageDiv').innerText = unameObj.age;

    for (let key in unameObj) {
        const divElement = document.createElement("div");
        const userElement = document.createElement("p");
        userElement.innerText = key + " : " + unameObj[key];
        userElement.className = "successClass"
        userElement.id = key + "id"
        document.getElementById('unameDiv').append(userElement);
    }
}

registerSuccess();



   // titles = ['username', 'password', , 'email', 'text', 'date', 'age'];

    // for (let i of titles){
    //     const histElement = document.getElementById('history1');
    //     const newP = document.createElement('output');
    //     newP.innerText = titles[i] + " : " + val;
    //     histElement.prepend(newP);


