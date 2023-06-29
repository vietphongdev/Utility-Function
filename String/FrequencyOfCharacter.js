/* Cách 1: Dùng hàm reduce */

const computeFrequency = input => {
  if(!input) return {};
  
  const output = [...input].reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {})
  
  return output
}

console.info(computeFrequency("abrakatabra"));



/* Cách 2: Không dùng hàm reduce - chỉ dùng vòng lặp */

const computeFrequency = input => {
  if (!input) return {};
  
  const output = {};
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    output[char] = output[char] + 1 || 1;
  }
  
  return output;
}



