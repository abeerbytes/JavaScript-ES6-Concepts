console.log("1 Program start");

function first() {
  console.log("2 Enter first()");

  second();

  console.log("7 Exit first()");
}

function second() {
  console.log("3 Enter second()");

  third();

  console.log("6 Exit second()");
}

function third() {
  console.log("4 Enter third()");

  setTimeout(() => {
    console.log(" Async task setTimeout executed");
  }, 0);

  console.log(" 5 exit third()");
}

first();

console.log(" Program end");
