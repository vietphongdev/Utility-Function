
/**
 * 
 * Dãy Fibonacci là dãy số thỏa mãn có ít nhất 2 phần tử đầu tiên trong dãy số là [0, 1] và phần tử tiếp theo bằng tổng của hai phần tử liền trước nó.
 *  Viết function nhận đối số n là số lượng phần tử của dãy Fibonacci và trả ra kết quả của dãy Fibonacci.
 */

const generateFibonacci = n => {
  if(n < 2) return null;
  const fibonacci = [0, 1];
  for(i = 2; i < n; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  };
  return fibonacci
};

const fibonacci = generateFibonacci(8);
console.log(generateFibonacci) // [0,1,1,2,3,5,8,13]


/** Cách 2: không dùng mảng */

​​const generateFibonacci = n => {
  if(n < 2) return null;
  let number1 = 0;
  let number2 = 1;
  let number;
  for(i = 2; i < n; i++){
    number = number2 + number1;
    number1 = number2;
    number2 = number;
  };
  return number
};

const fibonacci = generateFibonacci(10);
console.log(fibonacci) // 34


