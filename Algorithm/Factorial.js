function factorial(n) {
    if (n === 0) {
      return 1
    }
    return n * factorial(n - 1)
}

function factorial(x) {
    if (x < 0) return;
    if (x === 0) return 1;
    return x * factorial(x - 1);
  }
  const test = factorial(3);
  console.log(test)