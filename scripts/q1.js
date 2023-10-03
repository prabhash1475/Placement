// var
function variable() {
  var name = "PK";
  if (true) {
    var name = "Prabhash";
  }
  console.log(name);
}
// variable();

// let

function variabele2() {
  let x = 10;
  //   let x=20  can't be re-declared
  x = 30; //can be updated or re-assigned
  if (true) {
    let x = 5; // This is a different x variable, only accessible inside the if block.
  }
  console.log(x); //output 30
}
/* let cann't be re-decleare */
// it can be re-assigned or updated later

// variabele2();

/*  ********** const ********* */

const x = 50;

/* Variables declared with const cannot be reassigned
 after they are initialized. They must have a 
 value assigned when declared, and this value 
 cannot be changed.    */
