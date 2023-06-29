const reverseString = (str) => {
  if (!str) return "";
  const separatedString = [...str];
  const reverseArray = separatedString.reverse();
  const reverseString = reverseArray.join("");
  return reverseString;
};

console.log(reverseString(""));
console.log(reverseString("abc"));
console.log(reverseString("aaabbbcccd"));

/**
 * Cách 2
 */

function revStr(str) {
  if (str === "") return "";
  return revStr(str.substr(1)) + str[0];
}
