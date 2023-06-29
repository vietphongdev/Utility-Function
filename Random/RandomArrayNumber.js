function myFunction() {
  const numbers = [...Array(100).keys()].map((num) => num + 1);
  const randomNum = numbers.sort(() => Math.random() - 0.5);
  const result = randomNum.slice(0, 10);
}
