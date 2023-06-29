/**
 *  arr là mảng một chiều cần được chuyển đổi thành mảng hai chiều.
 *  size là số lượng phần tử trong mỗi mảng con trong mảng hai chiều kết quả.
 */

const convertTo2DArray = (arr, size) => {
  if (size > arr.length) return arr;

  const newArr = [];
  for (i = 0; i < arr.length; i += size) {
    const splitArray = arr.slice(i, i + size);
    newArr.push(splitArray);
  }
  return newArr;
};

function convertTo2DArray(arr, size) {
  const result = [];
  const length = Math.ceil(arr.length / size);

  for (let i = 0; i < length; i++) {
    result.push(arr.slice(i * size, (i + 1) * size));
  }

  return result;
}

/**
 *  arr là mảng một chiều cần được chuyển đổi thành mảng hai chiều.
 *  size là số lượng mảng con trong mảng hai chiều kết quả.
 */
