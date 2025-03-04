/**
 * input = ["a", "b", "c", "d", "a", "c", "e"];
 * output = ["b","d","e"]
 */

/** Dùng forEach */
const removeDuplicatedItem = (input) => {
  let output = [];
  input.forEach((item) => {
    if (!output.includes(item)) {
      output = [...output, item];
    } else {
      output = output.filter((ele) => ele !== item);
    }
  });
};

/** Dùng Reduce */
const removeDuplicatedItem2 = (arr) => {
  const frequenceObj = arr.reduce((acc, item) => {
    if(acc.hasOwnProperty(item)){
      const {[item]: val, ...restAcc} = acc;
      return restAcc;
    }else{
      acc[item] = 1;
      return acc;
    }
  }, {});
  return Object.keys(frequenceObj)
};

/** Test */
const myArr = ["a", "b", "c", "d", "a", "c", "e"];
const newArr = removeDuplicatedItem(myArr);
console.log(newArr);
console.log(myArr);
