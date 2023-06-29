/**
 * Cho một chuỗi số bất kỳ. Remove một chữ số ngẫu nhiên trong chuỗi đó. 
 * Tìm vị trí của chữ số cần remove để sau khi remove ta được một chuỗi mới có giá trị nhỏ nhất.
 * Giải bình thường :
 * Chạy vòng lặp lần lượt cắt từng chữ số trong chuỗi ban đầu đi, mỗi lần cắt ta sinh ra được một chuỗi mới 
 * => ta sẽ có một mảng các chuỗi mới.
 * Trong mảng này ta sẽ tìm được giá trị nhỏ nhất 
 * Vị trí của nó trong mảng cũng chính là vị trí của ký tự cần removed.
 * 
 * Giải bằng thuật toán :
 * Số cần tìm là số đầu tiên từ trái qua mà thỏa mãn điều kiện nó lớn hơn chữ số đứng ngay sau nó..
 */



const myNum = '173977736043';

// Cach 1: 
const func1 = (num) => {
  const digits = [...num];
  const newNum = digits.map((digit, index) => parseInt(num.slice(0, index) + num.slice(index + 1)));
  // console.log('newNum >>', newNum);
  const minNum = Math.min(...newNum);
  // console.log('minNum >>>', minNum);
  const index = newNum.findIndex(num => num === minNum);
  return index;
}

const result1 = func1(myNum);
console.log('result1 >>>>>>>>>>>>>', result1);

// Cach2:
const func2 = (num) => {
   let index = num.length -1;
   for(let i = 0; i < num.length - 1; i++ ){
    const curNum = parseInt(num.slice(i, i + 1));
    console.log('curNum >>', curNum);
    const nextNum = parseInt(num.slice(i +1, i +2));
    console.log('nextNum >>', nextNum);
    if(curNum > nextNum) {
      index = i;
      break;
    };
  };
  return index
};

const result2 = func2(myNum);

console.log('result2 >>>>>>>>>>>>>>>>', result2);

  