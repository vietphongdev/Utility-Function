const rule = {
  ten: "name",
  tuoi: "age",
  gioitinh: "gender",
  diachi: "address",
};

const person = {
  id: 1,
  ten: "khuong",
  tuoi: 13,
  gioitinh: "nu",
  diachi: "HCM",
};

const replaceKeys = (object, rule) => {
  return Object.keys(rule).reduce((acc, oldKey) => {
    const newKey = rule[oldKey];
    const value = object[oldKey];
    const { [oldKey]: key, ...newAcc } = acc;
    return {
      ...newAcc,
      [newKey]: value,
    };
  }, object);
};

const newPerson = replaceKeys(person, rule);
console.log(newPerson);
console.log(person);
