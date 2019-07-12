
function enter() {
    document.getElementById("enterText").innerText = "success";
    console.log('text', enterText);
}

let userData = {};
function handleSubmit(form) {
    console.log(form);
    for (let element of form.elements) {
        if (element.id == "buttonId"){
            break;
        } 
        userData[element.id] = element.value;
        console.log("successfully submited");
    }
        const dataString = JSON.stringify(userData);
        sessionStorage.setItem('userData', dataString);
    window.location = 'Success.html';

    return false;
}




//for(let element of form.elements){
  //  console.log('element value', element.id);

  /*
  let x = {
      name: 'Ian'
  };
  x.name = 'Dan'
  x.age=12345;

  let arr = [1,2,3];
  arr.push(4); adds 4 to the end
  arr[2] = "5";
  arr.length

  obj = {
      name:'Ian'
    };
    const k = 'name';
    console.log(obj[k]);
  let x = 'name';
  obj[x];
  

  for(i=0;i<arr.length;i++){
    console.log(arr[i]);
  }

  for(let item of array){
      debugger;
      console.log('item',item)
      userData[element.id]=element.value;
    
    }

    localStorage.setItem(k,v);
                .getItem(k);
                .removeItem(k);
                .clear();

const x = localStorage.getItem('name');
localStorage.removeItem('sessionId');
localStorage.clear('name');
    */
