const person = {
  name: "viet",
  age: 23,
  email: "viet@gmail.com",
  city: "HN",
  position: "developer",
};
const removedPersonPoperties = ["email"];

/**
 * Đây không phải là cách tối ưu.
 * Việc phải lặp qua tất các thuộc tính trong object là không cần thiết.
 */
const removeProperties = (properties, object) => {
  return Object.keys(object).reduce((acc, key) => {
    if (!properties.includes(key)) {
      acc[key] = object[key];
    }
    return acc;
  }, {});
};

const removedPerson = removeProperties(removedPersonPoperties, person);
console.log(removedPerson);




/**
 * Cách tốt hơn là chỉ lặp qua mảng các thuộc tính muốn xóa thông qua hàm reduce.
 * Sau đó sử dụng kết hợp với destructuring.
 * Cách này tối ưu hơn vì số lần lặp chắc chắn sẽ nhỏ hơn hoặc bằng cách 1
 */

const removeProperties = (properties, object) => {
  return properties.reduce((acc, property) => {
    const {[property]: key, ...newAcc} = acc;
    return newAcc;
  }, object);
}


/**
 * Nếu không muốn dùng reduce thì có thể dùng vòng lặp forEach thay thế.
 * Lưu ý trước khi thực hiện cần cloen object gốc trước.
 */

const removeProperties = (properties, object) => {
  let cloneObject = {...object};
  properties.forEach(property => {
    const {[property]: value, ...rest} = cloneObject;
    cloneObject = rest;
  });
  return cloneObject
};