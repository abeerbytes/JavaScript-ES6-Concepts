console.log("start");

// 1 Loop with var
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("var loop:", i); // error
  }, 100 * i);
}

// 2 Loop with let
for (let j = 1; j <= 3; j++) {
  setTimeout(() => {
    console.log("let loop:", j); 
  }, 200 * j);
}

// 3️⃣ Loop with const
for (const k of [1, 2, 3]) {
  setTimeout(() => {
    console.log("const loop:", k); 
  }, 150 * k);
}

// Final log after all delays
setTimeout(() => {
  console.log("=== All loops complete ===");
}, 700);
