// Function Context:

let obj = {
  name: "Prabhash",
  sayHello: function () {
    console.log("Hello, " + this.name);
  },
};
obj.sayHello(); //output Hello, Prabhash

// Constructor Functions

function Persion(name) {
  this.name = name;
}
const persion1 = new Persion("Prabhash");
console.log(persion1.name); // output Prabhash

// Arrow Functions:
const object = {
  name: "Prabhash",
  sayHi: function () {
    console.log("Hi, " + this.name); // output Hi, Prabhash
  },
};
object.sayHi();
