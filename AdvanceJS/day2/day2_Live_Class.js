/*
function check() {
  console.log(this);
}
check();




function NikeProduct(n, p) {
  let obj = {};
  obj.name = n;
  obj.price = p;
  return obj;
}

let p1 = NikeProduct("shoes", 200);
console.log(p1);


let Product = function (n, p) {
  this.name = n;
  this.price = p;
};

let p1 = new Product("shoes", 1500);
console.log(p1);
* new key word it return the object explicitly( =>line 14)
 *and points to 'this' newly created object

* =>without 'new' and this keyword we will have to create an object and return it explicitly

* => Constructor function automate the process and act as blueprint
*/

/*

**** database code create a form accept following thing and put it in array

let arr = [];

function Products(n, p, b) {
  this.name = n;
  this.brand = b;
  this.price;
}
function storeProducts(e) {
  e.preventDefault();
  let form = document.getElementById("products");
  let name = form.name.value;

  let brand = form.brand.value;

  let price = form.price.value;

  let p1 = new Products(name, price, brand);
  arr.push(p1);
  console.log(arr);
}
*/

/*

* * CALL APplY BIND

let kitchen = {
  name: "Kitchen",
  purpose: "Prepare Food",

  cookFood: function (order) {
    console.log(`Serving ${order} in ${this.name}`);
  },
};

let livingRoom = {
  name: "Living Room",
  purpose: "Watching TV",
};

let bedRoom = {
  name: "Bed Room",
  purpose: "Sleeping",
};

* we are playing with the object method here i.e (cookFood)

* kitchen.cookFood("Chicken");  => here "this" refer to owner obj i.e kitchen

* kitchen.cookFood.call(livingRoom, "Samosa");
let x = kitchen.cookFood.bind(livingRoom, "Poha");
x();

let thor = {
  superPower: "Hammer",
};

let captain_america = {
  superPower: "Shield",
};

function superSuperPower() {
  console.log(`I have ${this.superPower}`);
}
*  ** here we are applying on function not on method
* superSuperPower.call(thor);

*/
