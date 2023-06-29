/**
 * Bài toán:
const arr1 = [0, 1, 2, 3];
const arr2 = [3, 6, 4, 2, 8]

Viết chương trình kết hợp hai biến i,j từ hai mảng để tạo thành số có hai chữ số thỏa mãn điều kiện:

Khi i nhận giá trị "2" và j nhận giá trị "4" trong arr2 thì tất cae các phần tử phía sau 
giá trị "4" của mảng arr2 sẽ bị bỏ qua mà không lấy.
 */


const arr1 = [0, 1, 2, 3];
const arr2 = [3, 6, 4, 2, 8]

loop1: for(let i = 0; i < arr1.length; i++){
  for(let j = 0; j < arr2.length; j ++){
      if (arr1[i]  == 2 && arr2[j]  === 4) {
         continue loop1;
      }
      console.log(`ij ==> ${arr1[i]}${arr2[j]}`)
  }
}