const animals = ['dog', 'pikachu', 'megladon', 'rasberry crazy ant', 'aardvark', 'cat']

output = animals.filter((value)=> !value.startsWith('m'))
.map((value, index) => index ? ', ' +  value : value) 
.reduce((prev, value) => prev + value);
   // return prev + value;

//sticks a comma before it if its true 

console.log('Animals: ' + output);