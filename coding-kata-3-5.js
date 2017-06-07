function threeFive(num) {
  let sumArray = [];


for (i = 1; i < num; i++) {
  if (i % 3 === 0) {
    sumArray.push(i);
  } else if(i % 5 === 0) {
    sumArray.push(i);
  }
}

return sumArray.reduce((a, b) => a + b, 0);

}

console.log(threeFive(1000));
