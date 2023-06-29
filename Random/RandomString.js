const myString = '0123456';

function myFunction() {
  const arrStr = [...myString];

  const shuffleArrStr = arrStr.sort(() => Math.random() - 0.5);

  const randomStr = shuffleArrStr.slice(0, 6).join("");
  
  document.getElementById("demo").innerHTML = randomStr;
}
