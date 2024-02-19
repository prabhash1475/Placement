// constructor function
/*
var person = {
  name: "Prabhash",
  myName: function () {
    console.log(this);
    * here this represent the owner of the object
  },
};
person.myName();


function myName() {
  console.log(this);
  * in function this refer to global object
}
myName()

* Alone this represent global object


*Constructor function with this and new key word

-->
function Player(n, t) {
  this.name = n;
  this.team = t;
}
var myPlayer = new Player("Ronaldo", "Barcilona");
console.log(myPlayer);
 --> Player {name: 'Ronaldo', team: 'Barcilona'}
 
 var myPlayer1 = new Player("Sachin", "India");
 console.log(myPlayer1);
 -->Player {name: 'Sachin', team: 'India'}
 
 *Call Apply Bind
 var person = {
   name: "Ayush",
 };
 var person1 = {
   name: "PK",
 };
 
 function myName(a,c) {
   console.log(this.name);
   this.age = a;
   this.city = c;
}
 myName.call(person);
 Ayush

*Call
-->Cll Provide new value of "this" to function/method
-->Call take argument separated by comma 

 myName.call(person1, 21,"Patna");
 console.log(person1);
 -->{name: 'PK', age: 21, city:Patna}

 * Apply
-->Apply is same as call but both take argument differently
--> Apply take argument in single array of argument


  myName.apply(person1,[ 21,"Patna"]);
 console.log(person1);
 -->{name: 'PK', age: 21, city:Patna}

 * Bind

 --> we can bind a particular object as "this" to a function and use it
  later point of time when it needed 
 var myBind = myName.apply(person1, 21,"Patna");
 myBind()
 --> -->{name: 'PK', age: 21, city:Patna}

*/
console.log(this);
