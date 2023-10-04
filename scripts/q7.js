console.log("Start");

function task() {
  setTimeout(() => {
    console.log("in task");
  }, 0);
}
task();
console.log("end");
