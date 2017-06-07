function sequence(num) {
  let fibonacciArray = [0], sumArray = [], previousNumber = 0, nextNumber = 1;

  while (nextNumber <= num) {
    let transitionalNumber = previousNumber
    previousNumber = nextNumber
    nextNumber = transitionalNumber + nextNumber
    fibonacciArray.push(previousNumber)

  }

  for ( let i = 0; i < fibonacciArray.length; i++) {     //finds all numbers that are divisable by two and have no remainder, and pushes them to the sumArray
    if(fibonacciArray[i] % 2 === 0) {
      sumArray.push(fibonacciArray[i]);
    }
  }

  return sumArray.reduce((a, b) => a + b, 0);   //adds everything in the array. 'A' correlates to previousNumber and 'b' correlates to nextNumber
}

console.log(sequence(4000000));
