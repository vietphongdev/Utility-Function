/** Cách - 1 */
const shuffle = (arr, times) => {
  let i = 0;
  while (i < times) {
    arr = arr.sort(() => Math.random() - 0.5);
    i++;
  };
  return arr
}
const myArr = [1,2,3,4,5,6,7,8, 23];
const newArr = shuffle(myArr, 4);



/** Cách - 2 */
const shuffle2 = (arr, times) => {
  if(!arr.length || arr.length === 1) return arr
  if(times > 0){
    arr = arr.sort(() => Math.random() - 0.5);
    shuffle(arr, times - 1)
  }
  return arr
}



/** Cách - 3  */
const shuffle3 = (arr) => {
  arr = arr.slice();
  for(let i = 0; i < arr.length; i++){
    const randomIndex = randomInt(i, arr.length -1);
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
  }
}


/** Cách - 4  */
const fisherYatesShuffle = (arr = []) => {
  if(arr.length <= 1) return arr;
  let i = arr.length - 1;
  while(i > 0) {
    const random = Math.floor(Math.random() * (i + 1));

    [arr[random], arr[i]] = [arr[i], arr[random]];

    i --;
  };
  return arr
}




