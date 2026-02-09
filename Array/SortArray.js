/* Cho 2 mảng đã được sort sẵn theo thứ tự tăng dần
A = [1, 5, 7, 10, 15, 25]
B = [1, 2, 3, 8, 28]

Hãy tạo ra mảng C gồm:
+ tất cả các phần tử của 2 mảng.
+ loại bỏ các giá trị trùng.
+ sắp xếp theo thứ tự tăng dần.

Output: [1, 2, 3, 5, 7, 8, 10, 15, 25, 28]
*/

/** GIẢI THUẬT
 * Clone một mảng C từ mảng A. 
 * Tạo một biến tạm start
 * Lặp qua từng phần tử của mảng B. (loop - i)
 * Mỗi phần tử mảng B lặp qua từng phần tử mảng C để so sánh. (loop - j)
 * Nếu nhỏ hơn thì xếp nó vào ngay bên trái của phần tử mảng C.
 * Nếu bằng thì bỏ qua
 * Nếu lớn hơn thì tiếp tục cho đến khi đến phần tử cuối mảng C, 
 *  nếu vẫn lớn hơn thì push tất cả các phần tử còn lại của mảng B vào cuối mảng C và dừng chương trình.
 */

const A = [2, 7, 10, 15, 25];
const B = [1, 6, 28, 30, 44];
let C = [...A];
let start = 0;

outerLoop:
for(let i = 0; i < B.length; i++){
  for(let j = start; j < C.length; j++){
    if(B[i] === C[j]){
      start = j + 1;
      break;
    };
    if(B[i] < C[j]){
      C.splice(j, 0, B[i]);
      start = j + 1;
      break;
    };
    if(j === C.length - 1){
      const restB = B.slice(i);
      console.log(`restB >>`, restB)
      C.concat(restB)
      break outerLoop;
    }
  };
  console.log(`B-item: ${B[i]} -> C: ${C}`)
};

console.log('A >>', A)
console.log('B >>', B)
console.log('C >>', C)

