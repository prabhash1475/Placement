function outer() {
  var name = "Prabhash";
  function inner() {
    console.log(name);
  }
  inner();
}
outer();
