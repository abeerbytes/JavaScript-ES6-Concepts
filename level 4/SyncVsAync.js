console.log("Task 4.1 – Sync vs Async Execution Order");

function normalFunction() {
  console.log("2 Normal function executed");
}

console.log("1 Start");

setTimeout(() => {
  console.log("4 Timer callback executed");
}, 0);

normalFunction();

console.log("3 End");
