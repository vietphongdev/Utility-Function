Cho 2 mảng đã được sort sẵn theo thứ tự tăng dần
A = [1, 5, 7, 10, 15, 25]
B = [1, 2, 3, 8, 28]

Hãy tạo ra mảng C gồm:
+ tất cả các phần tử của 2 mảng.
+ loại bỏ các giá trị trùng.
+ sắp xếp theo thứ tự tăng dần.

Output: [1, 2, 3, 5, 7, 8, 10, 15, 25, 28]

const A = [2, 7, 10, 15, 25];
const B = [2, 6, 28, 30, 44];
let C = [...A];
let start = 0

R1=[2,7,10,15,25];
R2=[2,6,7,10,15,25];
R3=[2,6,7,10,15,25];

for(let i = 0; i < B.length; i++){
  for(let j = start; j < C.length; j++){
    if(B[i] === C[j]){
      start = j + 1;
      break;
    };
    if(B[i] < C[j]){
      C.splice(j, 0, B[i]);
      temp = j + 1;
      break;
    };
    C.splice(j+1, 0, B[i]);
  };
  console.log(C)
}

