// following two line will run successfullydue to hosting
console.log(p); //undefined
greetings(); //"Hello"
console.log(greetings); //this will give the whole function

var p = 10;

function greetings() {
  console.log("Hello");
}

console.log(myName); //ReferenceError: Cannot access 'myName' before initialization
myName();
let myName = () => {
  console.log("Prabhash");
};

// function expression and arrow functions are not hoisted
