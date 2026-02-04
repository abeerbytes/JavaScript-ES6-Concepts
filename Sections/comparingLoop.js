
const arr = ["A", "B", "C"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


for (let index in arr) {
  console.log(index);
}

for (let value of arr) {
  console.log(value);
}
